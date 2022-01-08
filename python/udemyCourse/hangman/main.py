import random
from hangman_words import word_list
from hangman_art import stages

end_of_game = False
# word_list = ["ardvark", "baboon", "camel"]
chosen_word = random.choice(word_list)
word_length = len(chosen_word)
print(f'Pssst, the solution is {chosen_word}.')
lives = 6


previous_picks = []
display = []
for _ in range(word_length):
    display += "_"

while not end_of_game:
    guess = input("Guess a letter: ").lower()
    
    for position in range(word_length):
        letter = chosen_word[position]
        
        if letter == guess:
            display[position] = letter

    
    if guess not in chosen_word and guess not in previous_picks:
      lives -= 1
      print(f"You have lives {lives} left")
      if lives == 0:
        print("You lose!")
        end_of_game = True
    
    
    if guess in previous_picks:
      
      print("You already picked that letter!!!")
      
      
    print(f"{' '.join(display)}")
    print(stages[lives])
    

    if guess not in previous_picks:
      previous_picks.append(guess)
      
    print(previous_picks)
    
    
    if "_" not in display:
        end_of_game = True
        print("You win.")

    































# import random

# word_list = ["aardvark", "baboon", "camel"]

# chosen_word = random.choice(word_list)

# Testing code
# print(f'Pssst, the solution is {chosen_word}.')


# display = []

# word_length = len(chosen_word)

# for _ in range(word_length):
#     display += '_'



# end_of_game = False

# while not end_of_game:
#     guess = input("Guess a letter: ").lower()
#     for position in range(word_length):
#         letter = chosen_word[position]
#         print(f"Current position: {position} /n Current letter: {letter} \n Guess another letter: {guess}")
#         if letter == guess:
#             display[position] = letter
#     print(display)

#     if '_' not in display:
#         end_of_game = True
#         print('You won')
    