from random import random
from art import art

import random

hidden_number = random.randint(1,100)
 

def guessing_game():
    print(art)
    print("Welcome to the Number Guessing Game!")
    print("I am thinking of a number between 1 and 100.")
    print(f"Psst, the correct answer is {hidden_number}")
    difficulty = input("Choose a difficulty. Type 'easy' or 'hard': ").lower()
    playing_game = False
    easy = 10
    hard = 5

    while not playing_game:

        if difficulty == 'easy':
            
            print(f"You have {easy} attempts")
            guess = int(input("Make a guess: "))
            if easy == 1:
                print("You are out of guesses. You loose.")
                playing_game = True

            elif guess == hidden_number:
                print("You guessed the right number, you win!")
                playing_game = True
            elif guess > hidden_number:
                print("Lower")
                easy -= 1
            elif guess < hidden_number:
                print("Higher")
                easy -= 1
            
                
        else:
            
            print(f"You have {hard} attempts")
            guess = int(input("Make a guess: "))
            if hard == 1:
                print("You are out of guesses. You loose.")
                playing_game = True

            elif guess == hidden_number:
                print("You guessed the right number, you win!")
                playing_game = True
            elif guess > hidden_number:
                print("Lower")
                hard -= 1
            elif guess < hidden_number:
                print("Higher")
                hard -= 1
            
    keep_playing = input("Would you like to play again? Type 'yes' or 'no': ").lower()


    if keep_playing == 'yes':
        guessing_game()
                

guessing_game()

