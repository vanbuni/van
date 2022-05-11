from pandas._config import config
import psycopg2
import sys
import os 
import csv
import requests 
import json 
import pandas as pd 
import pgpasslib 
import uuid

''''check the url before running script. prod vs sb '''

# wp_live_url = 'https://ws.vantiv.com/payfac/merchant/provisioning/v1/submerchants/'
# sb_base_url = 'https://internal.sandbox-payments-api.com/'
base_url ='https://internal.live-payments-api.com/'
API_USER ='USqoWE5TBJRf3ftqeQeyNZed'
API_PASSWORD ='38d7f763-15b3-4e73-a2e6-018e1c93f8ec'

headers = {'content-type': 'application/json'} 

''' This function grabs the Vantiv submerchant ID 'id' in DB in the processor credentials table'''
''' works and grabs what it needs to '''
def get_submerchantid(mid): 
    #conn = psycopg2.connect(host='db1-processing-sb-pg12.cvmf2qsyodpz.us-east-2.rds.amazonaws.com',database="processing",user=USER,password=PASSWORD)
    conn = psycopg2.connect(host='db1-processing-prod-replica.cirlgfwr1ct4.us-east-1.rds.amazonaws.com',database="processing",user="vbradley", password="Van123!braD")
    cursor = conn.cursor()
    query = "select processor_credentials ->> 'id' AS ID from processing.merchants where mid='" + mid + "';"
    query_id = pd.read_sql_query(query, conn)
    submerchant_id = query_id['id'].to_string(index=False).replace(' ', '')
    #  Save id from query. 
    print('sub_merch ID: ' , submerchant_id)
    cursor.close()
    conn.close()
    return submerchant_id



'''' This function updates the Application level system_configs in FINIX
AND returns the vantiv license'''
def update_config(identity, new_close_time): 
    url = base_url+'identities/'+identity
    try: 
        response = requests.get(url, headers=headers, auth=(API_USER,API_PASSWORD))
        response.raise_for_status() # -> built in python return HTTP Error Obj if error occured 
        print(response.text)
    except requests.exceptions.RequestException as e:
        print("Request exception", e)
    except requests.exceptions.ConnectionError as e:
        print("Connection error", e)
    except requests.exceptions.HTTPError as e:
        print("HTTP error", e)
    response = response.json() 
    application_id = response['application'] #need to grab app id
    # config_url = base_url+'applications/'+application_id+'/processors/VANTIV_V1'
    # payload = {"system_config": {"batch_close_time": new_close_time}}
    # config_response = requests.put(config_url, headers={'Content-Type':'application/vnd.json+api'}, auth=(API_USER,API_PASSWORD), json=payload)
    #print('PUT HEADER')
    #print(config_response.request.headers)
    #print('------------- Response from PUT Request App Level')
    print('-------------------------------- config resp from config_update App Level', response)
    # print('Batch Close Time :', config_response['system_config']['batch_close_time'])
    # vantiv_license = response['application_config']['vantiv_license']
    
    # print('vantiv_license', vantiv_license)
    # return vantiv_license

# vantiv_license='VANTIV license=\""'
# vantiv_license = 'VANTIV license="58919be42b871e4179021a4756971fae"'

''' This function updates the batch close time directly on EXPRESS / Tripos API. Takes in a CSV File with MID, newclosetime'''
def update_express(mid, new_close_time, vantiv_license ): 
    sub_merch_id = get_submerchantid(mid)
    # print('Submerchant ID: ',sub_merch_id)
    random=str(uuid.uuid1())

    # 'GET request happens first' 
    express_get_url = 'https://ws.vantiv.com/payfac/merchant/provisioning/v1/submerchants/'+sub_merch_id+'/expresssubaccount'
    curr_sub_account_get_call = requests.get(express_get_url, headers={'Accept':'application/json','content-type': 'application/json','Authorization':'VANTIV license="58919be42b871e4179021a4756971fae"','v_CorrelationId':random})
    #print('Response from WP ----- GET call')
    res = curr_sub_account_get_call.json()
    print("================ update express function ================ ", res)
    batch_close_method = res['expressSubAccount']['batchCloseMethod']
    checkForDuplicateTransactions = res['expressSubAccount']['checkForDuplicateTransactions']
    enableCommercialCardBINQuery = res['expressSubAccount']['enableCommercialCardBINQuery']

    # need the whole payload to update 
    curr_sub_acc_call_url = 'https://ws.vantiv.com/payfac/merchant/provisioning/v1/submerchants/'+sub_merch_id+'/expresssubaccount'
    payload = {
        "batchCloseMethod":batch_close_method,
        "batchCloseTime": new_close_time,
        "checkForDuplicateTransactions":checkForDuplicateTransactions,
        "enableCommercialCardBINQuery":enableCommercialCardBINQuery
    }

    # performing PUT request here
    curr_sub_acc_call = requests.put(curr_sub_acc_call_url,headers={'Accept':'application/json','content-type': 'application/json','Authorization':'VANTIV license="58919be42b871e4179021a4756971fae"','v_CorrelationId':random}, data=json.dumps(payload))
    #print('Response from WP for POST')
    print('################### UPDATE COMPLETE UPDATE COMPLETE UPDATE COMPLETE  UPDATE COMPLETE #################')
    print(curr_sub_acc_call.json())


''' Main function'''
def main(): 
    print('This is the start of the code')
    file = 'Sheet1.csv' #name of csv 
    with open(file) as csv_file: 
        reader = csv.reader(csv_file)
        # batch_close_time_list_WP = []

        #skips headers 
        next(reader, None)
        for row in reader: 
            #update_config(identity, new close time)
            vantiv_license = update_config(row[4], row[5])
            #print(vantiv_license)
            #update_express(mid, new_close_time, vantiv_license)
            batchCloseTimeWP = update_express(row[3], row[5], vantiv_license)
            # batch_close_time_list_WP.append(batchCloseTimeWP)
            # print('------------------------ FINAL RESULT HERE---------------------', batch_close_time_list_WP)
            # subMerchID.append(sub_merch_id)
        # name of csv file 
    # filename = "result-test.csv"

    # writing to csv file 
    # with open(filename, 'w') as csvfile: 
    #     # creating a csv writer object 
    #     csvwriter = csv.writer(csvfile) 
    #     # Pushing to new excel sheet for reference, to compare if we have updated the times correctly 
    #     csvwriter.writerows(zip(batch_close_time_list_WP))


if __name__== "__main__":
    main()