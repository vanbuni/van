import psycopg2

con = psycopg2.connect(
    host="db1-processing-prod-replica.cirlgfwr1ct4.us-east-1.rds.amazonaws.com",
    database="processing",
    user='vbradley', 
    password= 'Van123!braD'
    )

SELECT =  input('SELECT: ')
FROM = input('FROM: ')
WHERE = input('WHERE: ')
ID = input('ID: ')

#cursor
cur = con.cursor()

#esecute th query
# cur.execute('SELECT * FROM processing.applications LIMIT 1')
cur.execute(''' SELECT
%s FROM
processing
.%s
WHERE
%s = 
'%s' '''
% (SELECT,FROM,WHERE,ID))

rows = cur.fetchall()

for r in rows:
    print(r)

cur.close()

con.close()