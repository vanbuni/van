import requests
from requests import Request, Session
import os
import psycopg2

API_USERNAME = os.environ.get('ROLE_ADMIN_USERNAME')
API_PASSWORD = os.environ.get('ROLE_ADMIN_PASSWORD')

 
