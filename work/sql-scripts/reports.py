import psycopg2
import uuid
import base58
import openpyxl

ID = 'f85a6aa5-0012-4c5c-bd67-4304b3af97f0'
con = psycopg2.connect(
    host="db1-processing-prod-replica.cirlgfwr1ct4.us-east-1.rds.amazonaws.com",
    database="dashboard",
    user='vbradley', 
    password= 'Van123!braD'
    )

#cursor
cur = con.cursor()

#esecute th query
# cur.execute('SELECT * FROM processing.applications LIMIT 1')
cur.execute(''' SELECT
  du.auth0_user_id,
  du.email_address,
  substring(convert_from(decode(m.encrypted_password, 'base64'), 'UTF8') from '(.*):') AS user_id,
  api.env AS environment,
  LEAST(du.created_at, du.v1_created_at) AS user_created_at,
  du.enabled AS user_enabled,
  LEAST(api.created_at, api.v1_created_at) AS api_created_at,
  api.enabled AS api_enabled,
  api.role_name AS api_role
FROM
  dashboard_user AS du
  JOIN dashboard AS d ON du.dashboard_id = d.id
  JOIN membership AS m on du.id = m.dashboard_user_id 
  JOIN api_credential AS api ON m.api_credential_id = api.id
WHERE
  d.name = 'lightspeed'
  ORDER BY api.env; ''')

rows = cur.fetchall()

for r in rows:
    print(r)

#close cursor
cur.close()

#close the connection
con.close()



