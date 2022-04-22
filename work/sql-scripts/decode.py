import psycopg2
import uuid
import base58

table = input('Table name: ')
type = input('MU/AP/ST ETC...')
ID = input('ID: ')

con = psycopg2.connect(
    host="db1-processing-prod-replica.cirlgfwr1ct4.us-east-1.rds.amazonaws.com",
    database="processing",
    user='vbradley', 
    password= 'Van123!braD'
    )

#cursor
cur = con.cursor()

#execute query
cur.execute(''' SELECT id 
                FROM %s
                WHERE id =
                data_support.finix_uuid_decode
                ('%s', '%s')::uuid;
''' % (table,str(type),str(ID))) 

row = cur.fetchall()

for r in row:
    print(r[0])

#close cursor
cur.close()

#close connection
con.close()