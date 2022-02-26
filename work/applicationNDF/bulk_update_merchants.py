# importing the requests library
import requests
import json
from requests import Request, Session

# defining the api-endpoint

base_url = "https://internal.live-payments-api.com/applications/"

# end_url = "/processors/VANTIV_V1"

# API Keys
API_USERNAME = 'USg7jMQv438shCp5WvWprxbv'
API_PASSWORD = 'ef87084e-b38b-47f2-9358-923fd8a3987d'

# headers

headers = {'content-type': 'application/vnd.json+api'}

merchant_ids = [
  'APenEUBDSsLRP4xzYJjoD7dz'
]

for x in merchant_ids:
   # Data sent to API

    dynamic_url = base_url + x
    # fee_ready_to_settle_upon: we create fees and date it the same as the transfer activity date
    # ready_to_settle_upon: immediately placed into a settlement
    payload = {

        "fee_ready_to_settle_upon": "RECONCILIATION_ACTIVITY_DATE",
        "ready_to_settle_upon": "SUCCESSFUL_CAPTURE"

    }
    # sending post request and saving response as response object
    r = requests.put(dynamic_url, headers=headers, auth=(
        API_USERNAME, API_PASSWORD), json=payload)

    # extracting response text
    pastebin_url = r.text
    print("Response:%s" % pastebin_url)