##
import requests
import json
import uuid

submerchant_id = ['105846319', '105846321', '105846331']

''' sanity check, confirm what is on Tripos/Express API '''
def get_batch_close_times():
    for id in submerchant_id:
        random=str(uuid.uuid1())
        url = "https://ws.vantiv.com/payfac/merchant/provisioning/v1/submerchants/"+id+"/expresssubaccount"
        payload = ""
        headers = {
        'Content-Type': 'application/json',
        'V_CorrelationId': random,
        'Authorization': 'VANTIV license="58919be42b871e4179021a4756971fae"'
        }

        response = requests.request("GET", url, headers=headers, data=payload)
        print('-----------------------------------------------------------')
        r = response.json()
        print('batch-close-time',r['expressSubAccount']['batchCloseTime']) 
        print('MID',r['mid'])

get_batch_close_times()