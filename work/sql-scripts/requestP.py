import requests

r = requests.get('https://swapi.dev/api//people/1')
print(r.text)