import psycopg2
import uuid
import base58
import pyperclip


new_list = []
con = psycopg2.connect(
    host="db1-processing-prod-replica.cirlgfwr1ct4.us-east-1.rds.amazonaws.com",
    database="processing",
    user='vbradley', 
    password= 'Van123!braD'
    )

ID = input("ID: ")

#cursor
cur = con.cursor()

cur.execute('''
SELECT
  z.payout_plan_ids
FROM (
    SELECT
      data_support.finix_uuid_encode('PO', po.id) AS poid,
      po.entity_id,
      po.active,
      'PO'
    FROM
      settlement.payout_plans AS po
    UNION ALL
    SELECT
      data_support.finix_uuid_encode('PT', mpt.id) AS ptid,
      mpt.merchant_id,
      mpt.active,
      'PT'
    FROM
      settlement.merchant_payout_plan_templates AS mpt
    UNION ALL
    SELECT
      data_support.finix_uuid_encode('CP', cpt.id) AS cpid,
      cpt.merchant_id,
      cpt.active,
      'CP'
    FROM
      settlement.merchant_combination_plan_templates AS cpt
    ) AS z (payout_plan_ids, merchant_id, active, "type")
  JOIN processing.merchants AS mu ON z.merchant_id = mu.id
WHERE
  mu.identity_id = data_support.finix_uuid_decode('ID', '%s')::uuid
  AND active = 'TRUE'
ORDER BY
  CASE "type"
      WHEN 'PO' THEN 1
      WHEN 'PT' THEN 2
      WHEN 'CP' THEN 3
  END ASC 
;
''' % (ID))

row = cur.fetchall()
new_row = list(row)

for item in row:
    i = str(item)
    new_list.append(i[2:-3])


if len(new_list) == 8:
    print('This Merchant is set to Gross')
if len(new_list) == 6:
    print('This Merchant is set to Net')



Net_Or_Gross = input("net or gross: ")
user_name_and_password = 'USg7jMQv438shCp5WvWprxbv:ef87084e-b38b-47f2-9358-923fd8a3987d'


# if len(new_list) > 7:
#             print('Sorry, multiple Merchants')


def printPlan():
    if Net_Or_Gross == 'net' and len(new_list) > 8:
        print('This Identity ID is attached to multiple Merchants')
        return
    if Net_Or_Gross == 'net' and len(new_list) < 8:
        print('This Merchant is already set to Daily Net')
        return
    if Net_Or_Gross == 'net':
            dailyNet = '''
    curl https://finix.live-payments-api.com/settlement_engine/payout_plans/%s \\
            -H "Content-Type: application/vnd.json+api" \\
            -u %s \\
            -X PATCH \\
            -d '{
            "templates": [
                {
                    "action": "DELETE",
                    "template_id": "%s",
                    "data": {}
                },
                {
                    "action": "DELETE",
                    "template_id": "%s",
                    "data": {}
                },
                {
                    "action": "DELETE",
                    "template_id": "%s",
                    "data": {}
                },
                {
                    "action": "CREATE",
                    "data": {
                        "name": "PLATFORM_FEES",
                        "level": "PLATFORM",
                        "source_instrument_label": "PAYFAC_FBO",
                        "destination_instrument_label": "PLATFORM_BANK_ACCOUNT",
                        "rail": "PAYFAC_CREDIT",
                        "split_percentage": 100,
                        "config": {
                            "fee": {
                                "includes": [
                                    "*"
                                ],
                                "excludes": []
                            }
                        }
                    }
                },
                {
                    "action": "CREATE",
                    "data": {
                        "name": "PLATFORM_DISPUTES_AND_ADJUSTMENTS",
                        "level": "PLATFORM",
                        "source_instrument_label": "PAYFAC_FBO",
                        "destination_instrument_label": "PLATFORM_BANK_ACCOUNT",
                        "rail": "PAYFAC_CREDIT",
                        "split_percentage": 100,
                        "config": {
                            "dispute_transfer": {
                                "includes": [
                                    "PLATFORM_CREDIT",
                                    "PLATFORM_DEBIT"
                                ],
                                "excludes": []
                            },
                            "adjustment": {
                                "includes": [
                                    "PLATFORM_CREDIT_ADJUSTMENT",
                                    "PLATFORM_DEBIT_ADJUSTMENT"
                                ],
                                "excludes": []
                            }
                        }
                    }
                },
                {
                    "action": "CREATE",
                    "data": {
                        "name": "MERCHANT_FUNDING_DATA",
                        "level": "MERCHANT",
                        "source_instrument_label": "PAYFAC_FBO",
                        "destination_instrument_label": "MERCHANT_BANK_ACCOUNT",
                        "rail": "PAYFAC_CREDIT",
                        "split_percentage": 100,
                        "fee_default": true,
                        "config": {
                            "transfer": {
                                "includes": [
                                    "*"
                                ],
                                "excludes": []
                            },
                            "dispute_transfer": {
                                "includes": [
                                    "*"
                                ],
                                "excludes": [
                                    "PLATFORM_CREDIT",
                                    "PLATFORM_DEBIT"
                                ]
                            },
                            "reverse": {
                                "includes": [
                                    "*"
                                ],
                                "excludes": []
                            },
                            "adjustment": {
                                "includes": [
                                    "*"
                                ],
                                "excludes": [
                                    "PLATFORM_CREDIT_ADJUSTMENT",
                                    "PLATFORM_DEBIT_ADJUSTMENT"
                                ]
                            }
                        }
                    }
                }
            ],
            "combination_plans": [
                {
                    "action": "DELETE",
                    "combination_plan_id": "%s",
                    "data": {}
                },
                {
                    "action": "DELETE",
                    "combination_plan_id": "%s",
                    "data": {}
                },
                {
                    "action": "DELETE",
                    "combination_plan_id": "%s",
                    "data": {}
                },
                {
                    "action": "DELETE",
                    "combination_plan_id": "%s",
                    "data": {}
                },
                {
                    "action": "CREATE",
                    "data": {
                        "name": "MERCHANT_FUNDING_INSTRUCTION",
                        "level": "MERCHANT",
                        "source_instrument_label": "PAYFAC_FBO",
                        "destination_instrument_label": "MERCHANT_BANK_ACCOUNT",
                        "rail": "PAYFAC_CREDIT",
                        "equation": "MERCHANT_FUNDING_DATA-(PLATFORM_FEES)",
                        "submission_settings": {
                            "type": "IMMEDIATE"
                        }
                    }
                },
                {
                    "action": "CREATE",
                    "data": {
                        "name": "PLATFORM_FUNDING_INSTRUCTION",
                        "level": "PLATFORM",
                        "source_instrument_label": "PAYFAC_FBO",
                        "destination_instrument_label": "PLATFORM_BANK_ACCOUNT",
                        "rail": "PAYFAC_CREDIT",
                        "equation": "PLATFORM_DISPUTES_AND_ADJUSTMENTS+PLATFORM_FEES",
                        "submission_settings": {
                            "type": "IMMEDIATE"
                        }
                    }
                }
            ],
            "schedules": [
                {
                    "type": "DAILY",
                    "timezone": "America/New_York",
                    "auto_close_offset_hours": 13,
                    "auto_close_offset_minutes": 0,
                    "auto_close_offset_days": 0,
                    "template_names": [
                        "PLATFORM_DISPUTES_AND_ADJUSTMENTS",
                        "MERCHANT_FUNDING_DATA",
                        "PLATFORM_FEES"
                    ]
                }
            ]
        }'



        ''' % (new_list[0],user_name_and_password,new_list[1],new_list[2],new_list[3],new_list[4],
        new_list[5],new_list[6],new_list[7])
            print(dailyNet)
            pyperclip.copy(dailyNet)
    if Net_Or_Gross == 'gross' and len(new_list) == 8:
        print('Merchant is already set to Gross')
        return
    if Net_Or_Gross == 'gross':
        dailyGross = '''
    curl https://finix.live-payments-api.com/settlement_engine/payout_plans/%s \\
        -H "Content-Type: application/vnd.json+api" \\
        -u %s \\
        -X PATCH \\
        -d '{
        "templates": [
            {
                "action": "DELETE",
                "template_id": "%s",
                "data": {}
            },
            {
                "action": "DELETE",
                "template_id": "%s",
                "data": {}
            },
            {
                "action": "DELETE",
                "template_id": "%s",
                "data": {}
            },
            {
                "action": "CREATE",
                "data": {
                    "name": "PLATFORM_FEES",
                    "level": "PLATFORM",
                    "source_instrument_label": "PAYFAC_FBO",
                    "destination_instrument_label": "PLATFORM_BANK_ACCOUNT",
                    "rail": "PAYFAC_CREDIT",
                    "split_percentage": 100,
                    "config": {
                        "fee": {
                            "includes": [
                                "*"
                            ],
                            "excludes": []
                        }
                    }
                }
            },
            {
                "action": "CREATE",
                "data": {
                    "name": "PLATFORM_DISPUTES_AND_ADJUSTMENTS",
                    "level": "PLATFORM",
                    "source_instrument_label": "PAYFAC_FBO",
                    "destination_instrument_label": "PLATFORM_BANK_ACCOUNT",
                    "rail": "PAYFAC_CREDIT",
                    "split_percentage": 100,
                    "config": {
                        "dispute_transfer": {
                            "includes": [
                                "PLATFORM_CREDIT",
                                "PLATFORM_DEBIT"
                            ],
                            "excludes": []
                        },
                        "adjustment": {
                            "includes": [
                                "PLATFORM_CREDIT_ADJUSTMENT",
                                "PLATFORM_DEBIT_ADJUSTMENT"
                            ],
                            "excludes": []
                        }
                    }
                }
            },
            {
                "action": "CREATE",
                "data": {
                    "name": "MERCHANT_FUNDING_DATA",
                    "level": "MERCHANT",
                    "source_instrument_label": "PAYFAC_FBO",
                    "destination_instrument_label": "MERCHANT_BANK_ACCOUNT",
                    "rail": "PAYFAC_CREDIT",
                    "split_percentage": 100,
                    "fee_default": true,
                    "config": {
                        "transfer": {
                            "includes": [
                                "*"
                            ],
                            "excludes": []
                        },
                        "dispute_transfer": {
                            "includes": [
                                "*"
                            ],
                            "excludes": [
                                "PLATFORM_CREDIT",
                                "PLATFORM_DEBIT"
                            ]
                        },
                        "reverse": {
                            "includes": [
                                "*"
                            ],
                            "excludes": []
                        },
                        "adjustment": {
                            "includes": [
                                "*"
                            ],
                            "excludes": [
                                "PLATFORM_CREDIT_ADJUSTMENT",
                                "PLATFORM_DEBIT_ADJUSTMENT"
                            ]
                        }
                    }
                }
            }
        ],
        "combination_plans": [
            {
                "action": "DELETE",
                "combination_plan_id": "%s",
                "data": {}
            },
            {
                "action": "DELETE",
                "combination_plan_id": "%s",
                "data": {}
            },
            {
                "action": "CREATE",
                "data": {
                    "name": "MERCHANT_FUNDING_INSTRUCTION",
                    "level": "MERCHANT",
                    "source_instrument_label": "PAYFAC_FBO",
                    "destination_instrument_label": "MERCHANT_BANK_ACCOUNT",
                    "rail": "PAYFAC_CREDIT",
                    "equation": "MERCHANT_FUNDING_DATA",
                    "submission_settings": {
                        "type": "IMMEDIATE"
                    }
                }
            },
            {
                "action": "CREATE",
                "data": {
                    "name": "PLATFORM_FUNDING_INSTRUCTION",
                    "level": "PLATFORM",
                    "source_instrument_label": "PAYFAC_FBO",
                    "destination_instrument_label": "PLATFORM_BANK_ACCOUNT",
                    "rail": "PAYFAC_CREDIT",
                    "equation": "PLATFORM_DISPUTES_AND_ADJUSTMENTS",
                    "submission_settings": {
                        "type": "IMMEDIATE"
                    }
                }
            },
            {
                "action": "CREATE",
                "data": {
                    "name": "PLATFORM_FUNDING_INSTRUCTION_FEES",
                    "level": "PLATFORM",
                    "source_instrument_label": "PAYFAC_FBO",
                    "destination_instrument_label": "PLATFORM_BANK_ACCOUNT",
                    "rail": "PAYFAC_CREDIT",
                    "equation": "PLATFORM_FEES",
                    "submission_settings": {
                        "type": "IMMEDIATE"
                    }
                }
            },
            {
                "action": "CREATE",
                "data": {
                    "name": "MERCHANT_FUNDING_INSTRUCTION_FEES_DEBIT",
                    "level": "MERCHANT",
                    "source_instrument_label": "MERCHANT_BANK_ACCOUNT",
                    "destination_instrument_label": "PAYFAC_FBO",
                    "rail": "PAYFAC_CREDIT",
                    "equation": "PLATFORM_FEES",
                    "submission_settings": {
                        "type": "IMMEDIATE"
                    }
                }
            }
        ],
        "schedules": [
            {
                "type": "DAILY",
                "timezone": "America/New_York",
                "auto_close_offset_hours": 13,
                "auto_close_offset_minutes": 0,
                "auto_close_offset_days": 0,
                "template_names": [
                    "PLATFORM_DISPUTES_AND_ADJUSTMENTS",
                    "MERCHANT_FUNDING_DATA",
                    "PLATFORM_FEES"
                ]
            }
        ]
    }'
        ''' % (new_list[0],user_name_and_password,new_list[1],new_list[2],new_list[3],new_list[4],
        new_list[5])
        print(dailyGross)
        pyperclip.copy(dailyGross)

printPlan()
