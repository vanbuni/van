import random

word_list = ["aardvark", "baboon", "camel"]

chosen_word = random.choice(word_list)

#Testing code
print(f'Pssst, the solution is {chosen_word}.')


display = []

word_length = len(chosen_word)

for _ in range(word_length):
    display += '_'







# position = 0


# for letter in chosen_word:
#     position += 1
#     if letter == guess:
#         print("Right")
#         display[position - 1] = letter
#     else:
#         print("Wrong")


# while '_' in display:
#     lives = 0
#     guess = input("Guess a letter: ").lower()
#     for position in range(word_length):
#         letter = chosen_word[position]
#         if letter == guess:
#             display[position] = letter
# if letter != guess:
#     lives += 1
# if lives >= 6:
#     print('You have been hung!')
#     print(f"${display} + line 42") 
#     print(f"${lives}/6")
#     if '_' not in display:
#         print('You win')

lives = 0
choices = []
while '_' in display:
    
    guess = input("Guess a letter: ").lower()
    
    for position in range(word_length):
        letter = chosen_word[position]
        
        if letter == guess:
            display[position] = letter
    if guess in choices:
        print('You already choose that letter stupid')
        lives+= 1

    if guess not in chosen_word:
        lives += 1
        print(lives)
    
        
    print(display)
    print(f'You have {lives}/6 more guesses')
    print(lives)
    choices.append(guess)
    if lives >= 6:
        print('You dead')
        break
    if '_' not in display:
        print('You win')
         













