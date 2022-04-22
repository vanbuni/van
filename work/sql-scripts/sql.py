import psycopg2
import uuid
import base58

con = psycopg2.connect(
    host="db1-processing-prod-replica.cirlgfwr1ct4.us-east-1.rds.amazonaws.com",
    database="processing",
    user='vbradley', 
    password= 'Van123!braD'
    )
query = input('Query: ')
#cursor
cur = con.cursor()

cur.execute('''%s''' % (query))
rows = cur.fetchall()
for r in rows:
    list(r)
    for item in r:
        print(item)
    

#close cursor
cur.close()

#close the connection
con.close()