from setup import *
# ID = 'f85a6aa5-0012-4c5c-bd67-4304b3af97f0'
ID = input('Dispute ID: ')

app_name = '''SELECT p.name FROM platforms p
JOIN applications a ON a.platform_id = p.id 
JOIN risk.disputes d ON d.application_id = a.id
WHERE d.id = data_support.finix_uuid_decode('DI', '%s')::uuid ''' % (ID)

read_sql(app_name)