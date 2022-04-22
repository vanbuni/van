import psycopg2
import uuid
import base58
ID = 'f85a6aa5-0012-4c5c-bd67-4304b3af97f0'
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
cur.execute(''' SELECT * FROM risk.dispute_files WHERE dispute_id = '%s' ''' % (ID))

rows = cur.fetchall()

for r in rows:
    text = r[0]
    # encode = base58.b58encode((r[0]))
    base58Str = base58.b58encode(text.encode('utf-8')).decode('utf-8')
    print(base58Str)
    # print(encode)
    # print(f"Dispute File ID {r[0]}")

#close cursor
cur.close()

#close the connection
con.close()



