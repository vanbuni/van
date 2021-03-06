import requests
ids = ['POpYGoLVEbcEtwLyd7bacRdS', 
'PTpYK6Xf6rfq5Sc1VooXu7uQ', 
'PTpYM1qUkZYhNCFy6DpHQQJd', 
'PTpYNbjXddNhj2695mmwNebj',
'CPpYQnfiJmJnh49PEYyqjbuE', 
'CPpYRhXqUrSAqVvroLa5L1Ra', 
'CPpYT1bUTGDpZAgosW4nRfjp'
]
Payout = '''

     -H "Content-Type: application/vnd.json+api" \
     -u US2PQ4duazn9AN4tFGz2Nuhv:4ec87fb5-ba54-43db-8dac-6f2bc302dfa5 \
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
''' % (ids[1],ids[2],ids[3],ids[4],ids[5],ids[6])


r = requests.patch('https://finix.sandbox-payments-api.com/settlement_engine/payout_plans/POpYGoLVEbcEtwLyd7bacRdS', data ={Payout})