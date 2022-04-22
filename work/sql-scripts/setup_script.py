from pandas import read_sql_query
from setup import *
ID = 'fd4cd798-7993-44b8-940e-343ace41a677'
dispute = ''' SELECT * FROM risk.dispute_files WHERE dispute_id = '%s' ''' % (ID)

read_sql(dispute)
# print(type(read_sql_query(dispute,'con')))
