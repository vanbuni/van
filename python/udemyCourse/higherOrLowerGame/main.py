from gameData import data
from art import logo, vs
import random

print(logo)
def check(a,b):
    if a['follower_count'] > b['follower_count']:
        return a
    else:
        return b

def letterCheck(a,b):
    if a['follower_count'] > b['follower_count']:
        return 'a'
    else:
        return 'b'

a = data[random.randint(0,len(data)) - 1]
b = data[random.randint(0,len(data)) - 1]
        
if a == b:
        a = data[random.randint(0,len(data)) - 1]
        b = data[random.randint(0,len(data)) - 1]

def game(a,b,score):
    if a == b:
        b = data[random.randint(0,len(data)) - 1]
        
    print(f"Compare Name: {a['name']}, Description: {a['description']}, Country: {a['country']}")
    print(vs)
    print(f"Compare Name: {b['name']}, Description: {b['description']}, Country: {b['country']}")
    guess = input("Who has more Instagram followers? Type 'a' or 'b'")
    winner = check(a= a, b= b)
    letter = letterCheck(a = a, b = b)
    if guess == letter:
        print("You win")
        score += 1
        print(f"Score: {score}")
        return winner
    else:
        print("You loose")
        print(f"Score: {score}")
        return 

score = 0   
x = game(a=a,b=b, score=score)

playing = True

while playing:
    if x == None:
        break
    score += 1
    b = data[random.randint(0,len(data) - 1)]
    x = game(a=x,b=b,score=score)      


    
        
   
        


    

    




    







