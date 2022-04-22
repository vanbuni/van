import psycopg2
import uuid
import base58

type = input('MU/AP/ST ETC...')

if type == 'AP':
  table = 'applications'
if type == 'ID':
  table = 'identities'
if type == 'MU':
  table = 'merchants'
if type == 'PL':
  table = 'platforms'
if type == 'ST':
  table = 'settlements'
if type == 'TR':
  table = 'transfers'
if type == 'VI':
  table = 'verifications'
# table = input('Table: ')
id = input('ID: ')


con = psycopg2.connect(
    host="db1-processing-prod-replica.cirlgfwr1ct4.us-east-1.rds.amazonaws.com",
    database="processing",
    user='vbradley', 
    password= 'Van123!braD'
    )

#cursor
cur = con.cursor()

#execute the query
cur.execute(''' SELECT
  data_support.finix_uuid_encode('%s', id) AS ID,
  *
FROM 
  processing.%s 
WHERE 
  id =  '%s' ''' % (str(type),table,str(id)))

rows = cur.fetchall()

for r in rows:
    print(r[0])
    

#close cursor
cur.close()

#close the connection
con.close()



