from random import randint
from art import art

EASY_LEVEL_TURNS = 10
HARD_LEVEL_TURNS = 5

def check_answer(guess, answer, turns):
    """Checks answer against guess and returns the number of turns remaining"""
    if guess > answer:
        print("Too high.")
        return turns - 1
    elif guess < answer:
        print("Too low.")
        return turns - 1
    else:
        print(f"You got it! The answer is {answer}")


def set_difficulty():
    level = input("Choose a difficulty. Type 'easy' or 'hard': ")
    if level == 'easy':
        return EASY_LEVEL_TURNS
    else:
        return HARD_LEVEL_TURNS

def game():
    print(art)
    print("Welcome to the guessing game!")
    print("I am thinking of a number from 1 to 100")

    answer = randint(1,100)
    print(f"Psst, the answer is {answer}")
    turns = set_difficulty()
    

    guess = 0
    while guess!= answer:
        print(f"You have {turns} attempts remaining to guess a number")
        guess = int(input('Make a guess: '))
        turns = check_answer(guess,answer, turns)
        if turns == 0:
            print("You have 0 attempts you loose")
            return
        elif guess != answer:
            print("Guess again.")



game()