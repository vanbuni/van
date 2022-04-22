import psycopg2
import uuid
import base58
# ID = 'f85a6aa5-0012-4c5c-bd67-4304b3af97f0'
mu = input('Merchant_ID: ')

con = psycopg2.connect(
    host="db1-processing-prod-replica.cirlgfwr1ct4.us-east-1.rds.amazonaws.com",
    database="processing",
    user='vbradley', 
    password= 'Van123!braD'
    )

#cursor
cur = con.cursor()

#esecute th query
# cur.execute('SELECT * FROM processing.applications LIMIT 1')
# cur.execute(''' SELECT * FROM risk.dispute_files WHERE dispute_id = '%s' ''' % (ID))
cur.execute(''' SELECT
  data_support.finix_uuid_encode('MU', id) AS muid,
  *
FROM 
  processing.merchants 
WHERE 
  id =  '%s' ''' % (str(mu)))

rows = cur.fetchall()

for r in rows:
    print(r[0])
    

#close cursor
cur.close()

#close the connection
con.close()



