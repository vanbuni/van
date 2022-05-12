# importing the requests library
import requests
import json
from requests import Request, Session

# defining the api-endpoint

base_url = "https://internal.live-payments-api.com/risk_profiles/"

# end_url = "/processors/VANTIV_V1"

# API Keys
'''Role Platform Creds Here'''
API_USERNAME = 'USg7jMQv438shCp5WvWprxbv'
API_PASSWORD = 'ef87084e-b38b-47f2-9358-923fd8a3987d'

# headers

headers = {'content-type': 'application/vnd.json+api'}

'''RPXXX Here'''
Risk_Profile_IDS = [
 {'Rpxxx'}
]

'''You can either set AVS Failure to true or false'''
for x in Risk_Profile_IDS:
   # Data sent to API

    dynamic_url = base_url + x
    payload = {

        "avs_failure_allowed": True

    }
    # sending post request and saving response as response object
    r = requests.put(dynamic_url, headers=headers, auth=(
        API_USERNAME, API_PASSWORD), json=payload)

    # extracting response text
    pastebin_url = r.text
    print("Response:%s" % pastebin_url)