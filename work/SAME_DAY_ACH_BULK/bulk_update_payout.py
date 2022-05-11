#!/usr/bin/env python


"""
This script is will handle the difficult of fetching and creating all the update calls
to fully replace a payout plan. It takes in a path to an input file which contains the json
request object for creating a payout plan. The other input file is the list of the payout plan ids
that need to be replaced
select id from settlement.payout_plans where platform_id = '' and active = true;
"""


import argparse
import csv
import json
import requests
from requests.auth import HTTPBasicAuth

import logging
import sys
import base58
import uuid
import json

logger = logging.getLogger("mylogger")
h1 = logging.StreamHandler(stream=sys.stdout)
h1.setLevel(logging.DEBUG)
logger.setLevel(logging.DEBUG)
logger.addHandler(h1)

parser = argparse.ArgumentParser(description='process arguments')
parser.add_argument("-f", "--file", required=True, help="path to csv file")
parser.add_argument("-x", "--host", required=True, help="url host")
parser.add_argument("-u", "--username", required=True,
                    help="ROLE_PLATFORM or ROLE_ADMIN user credentials")
parser.add_argument("-p", "--password", required=True,
                    help="ROLE_PLATFORM or ROLE_ADMIN user password")
parser.add_argument("-d", "--data_input_file", required=True,
                    help="path to input json data")


args = parser.parse_args()


def updatePayoutPlans(file, host, username, password, dataInputFile):
    logger.info("migrating file " + file)
    logger.info("host " + host)

    replacementData = {}
    with open(dataInputFile) as f:
        replacementData = json.load(f)

    # print replacementData

    with open(file) as csv_file:
        reader = csv.reader(csv_file)
        next(reader, None)  # skip the headers
        for row in reader:

            # userId = uuid.UUID('{%s}' % row[0])
            # unencoded_string = str(bytearray.fromhex(userId.hex))
            # base58.alphabet = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'
            # externalId = 'PO' + base58.b58encode(unencoded_string)

            userId = uuid.UUID('%s' % row[0]).bytes
            unencoded_string = base58.b58encode(
                userId, alphabet=b'123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ').decode('utf8')
            externalId = 'PO' + unencoded_string

            url = host + "/settlement_engine/payout_plans/" + externalId + "/templates"

            response = requests.get(url, auth=(username, password))
            logger.info("status %i", response.status_code)
            if response.status_code != 200:
                logger.error("error when fetching payout plan")
                logger.error("response %s", response.content)
            else:
                responseJson = response.json()

                # print responseJson

                if(responseJson.get("_embedded") is None):
                    print("No templates no-op")
                    continue

                url = host + "/settlement_engine/payout_plans/" + \
                    externalId + "/combination_plans"

                response = requests.get(url, auth=(username, password))
                logger.info("status %i", response.status_code)
                if response.status_code != 200:
                    logger.error("error when combination_plans payout plan")
                    logger.error("response %s", response.content)
                else:
                    planJson = response.json()

                    if(planJson.get("_embedded") is None):
                        print("no combination plans")
                        planJson = None

                updateRequest = buildRequest(
                    responseJson, planJson, replacementData)

                # print(updateRequest)

                updateUrl = host + "/settlement_engine/payout_plans/" + externalId

                response = requests.patch(
                    updateUrl, json=updateRequest, auth=(username, password))
                logger.info("status %i", response.status_code)

                if response.status_code != 200:
                    logger.error(
                        "error updating payout plan %s", updateRequest)
                    logger.error("response %s", response.content)

    logger.info("done")


def buildRequest(templateResponseJson, combinationPlanJson, replacementDataJson):

    data = {}

    data = appendCreateTemplate(replacementDataJson, data)

    data = appendCreateCombinationPlan(replacementDataJson, data)

    data = appendDeleteTemplate(templateResponseJson, data)

    data = appendDeleteCombinationPlan(combinationPlanJson, data)

    data = appendScheduleData(replacementDataJson, data)

    return data


def appendCreateTemplate(replacementDataJson, data):

    templates = replacementDataJson["templates"]

    data["templates"] = []

    for template in templates:

        value = {
            "action": "CREATE",
            "data": template
        }

        data["templates"].append(value)

    return data


def appendCreateCombinationPlan(replacementDataJson, data):

    combinationPlans = replacementDataJson["combination_plans"]

    data["combination_plans"] = []

    for combinationPlan in combinationPlans:

        value = {
            "action": "CREATE",
            "data": combinationPlan
        }

        data["combination_plans"].append(value)

    return data


def appendScheduleData(replacementDataJson, data):

    combinationPlans = replacementDataJson["combination_plans"]

    data["schedules"] = replacementDataJson["schedules"]

    return data


def appendDeleteTemplate(responseJson, data):
    existing = responseJson["_embedded"]["payout_plan_templates"]

    for entry in existing:

        value = {
            "action": "DELETE",
            "data": {}
        }

        value["template_id"] = entry["id"]

        data["templates"].append(value)

    return data


def appendDeleteCombinationPlan(responseJson, data):

    if responseJson is None:
        return data

    existing = responseJson["_embedded"]["combination_plans"]

    for entry in existing:

        value = {
            "action": "DELETE",
            "data": {}
        }

        value["combination_plan_id"] = entry["id"]

        data["combination_plans"].append(value)

    return data


def main():
    file = args.file
    host = args.host
    username = args.username
    password = args.password
    dataInputFile = args.data_input_file

    updatePayoutPlans(file, host, username, password, dataInputFile)


if __name__ == "__main__":
    main()