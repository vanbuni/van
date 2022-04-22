
test = [('POaoXCpPqZjbcj1FzuCPx5pF',),
('PTap2Hx1jJ3WZpQsctNEK5F3',),
('PTap639YnqCWbow1ev7AzVmk',),
('PTap8qGacsiog1zDGe7qGEf9',),
('CPapfwHukaRwsgsqxQaKvzGW',),
('CPapi95tsvBNqTUPKv9MAPAV',), 
('CPapkCRYSPGoH1WmExF1Qoec',), 
('CPapbgmqQiNV9Ve3fGEbpFcQ',)]
new_list = []
for item in test:
    i = str(item)
    new_list.append(i[2:-3])
    
Net_Or_Gross = input("Net or Gross: ")

if Net_Or_Gross == 'net':
        dailyNet = '''
    curl https://finix.live-payments-api.com/settlement_engine/payout_plans/ %s \
        -H "Content-Type: application/vnd.json+api" \
        -u USg7jMQv438shCp5WvWprxbv:ef87084e-b38b-47f2-9358-923fd8a3987d \
        -X PATCH \
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



    ''' % (new_list[0],new_list[1],new_list[2],new_list[3],new_list[4],
    new_list[5],new_list[6],new_list[7])
        print(dailyNet)
if Net_Or_Gross == 'gross':
    dailyGross = '''
    curl https://finix.live-payments-api.com/settlement_engine/payout_plans/%s \
     -H "Content-Type: application/vnd.json+api" \
     -u USg7jMQv438shCp5WvWprxbv:ef87084e-b38b-47f2-9358-923fd8a3987d \
     -X PATCH \
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
    ''' % (new_list[0],new_list[1],new_list[2],new_list[3],new_list[4],
    new_list[5])
    print(dailyGross)
