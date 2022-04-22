import psycopg2
import pgpasslib
import pandas as pd
import time
from tabulate import tabulate
import datetime

conn = psycopg2.connect(host="db1-processing-prod-replica.cirlgfwr1ct4.us-east-1.rds.amazonaws.com",database="processing",user='vbradley', password= 'Van123!braD')

def read_sql(x):
	df = pd.DataFrame(pd.read_sql_query(x,conn))
	# df = print(df.to_string(index=False))
	df = print(tabulate(df, headers='keys',showindex='False',tablefmt='psql',floatfmt=".2f"))

	return df