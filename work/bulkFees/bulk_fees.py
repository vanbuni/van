
import psycopg2
import os
import sys
from sys import argv
import pandas as pd
import numpy as np
import requests
import json
API_USERNAME = "USg7jMQv438shCp5WvWprxbv"
API_PASSWORD = "ef87084e-b38b-47f2-9358-923fd8a3987d"
headers = {'content-type': 'application/vnd.json+api'}
def parse_csv():
    input_file = argv[1]
    global subscription_billing
    global reader
    with open(input_file) as input_file:
        reader = pd.read_csv(input_file, dtype=object)
        # reader = reader.head(1)
        subscription_billing = reader.values
# NOTE: Last Billed Date in payload?
# Make API request with each Merchant ID and created Subscription Plan ID
def update_merchant_fee_profile():
    for row in reader.itertuples(index=False):
        merchant_id = row.merchant_id
        print(merchant_id)
        print('\n-------------\n')
        dynamic_url = "https://finix.live-payments-api.com/fees"
        payload = {
            "amount": 2999,
            "currency": "USD",
            "fee_type": "CUSTOM",
            "fee_subtype": "CUSTOM",
            "merchant_id": merchant_id,
            "label": "January Performance Analytics Fees",
            "settlement_delay_days": 0
        }
        # print(dynamic_url)
        # print(payload)
        try:
            response = requests.post(dynamic_url, headers=headers, auth=(API_USERNAME, API_PASSWORD), json=payload)
            response.raise_for_status()
            print(response.text)
        except requests.exceptions.RequestException as e:
            print("Request exception", e)
        except requests.exceptions.ConnectionError as e:
            print("Connection error", e)
        except requests.exceptions.HTTPError as e:
            print("HTTP error", e)
parse_csv()
update_merchant_fee_profile()