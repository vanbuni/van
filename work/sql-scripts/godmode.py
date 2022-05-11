import psycopg2

con = psycopg2.connect(
    host="db1-processing-prod-replica.cirlgfwr1ct4.us-east-1.rds.amazonaws.com",
    database="processing",
    user='vbradley', 
    password= 'Van123!braD'
    )

query = input()

#cursor
cur = con.cursor()

#esecute th query

cur.execute('''%s'''
% (query))

rows = cur.fetchall()
 
answer = list(rows)

for item in answer:
    for i in item:
        print(i)
    
  

cur.close()

con.close()