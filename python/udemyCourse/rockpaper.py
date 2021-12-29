import random

rock = '''
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
'''

paper = '''
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
'''

scissors = '''
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
'''

#Write your code below this line 👇
# rpc = [rock, paper, scissors]



# cpu = random.choice(rpc)
# print(cpu)
# # cpu = random.choice([rock,paper,scissors])


# while True:
#     player1 = input('0 For Rock, 1 For Paper, 2 For Scissor: ')
#     if player1 == '0' and cpu == scissors:
#         print('Player1 Choice: ' + rock)
#         print('CPU Choice: ' +cpu)
#         print("Player 1 Wins!")
#         break
#     elif player1 == '0' and cpu == paper:
#         print('Player1 Choice: ' + rock)
#         print('CPU Choice: ' + cpu)
#         print('CPU Wins!')
#         break
#     elif player1 == '0' and cpu == rock:
#         print('Player1 Choice: ' + rock)
#         print('CPU Choice: ' +cpu)
#         print("Draw")
#     if player1 == '1' and cpu == rock:
#         print('Player1 Choice: ' + paper)
#         print('CPU Choice: ' +cpu)
#         print("Player 1 Wins!")
#         break
#     elif player1 == '1' and cpu == scissors:
#         print('Player1 Choice: ' + paper)
#         print('CPU Choice: ' + cpu)
#         print('CPU Wins!')
#         break
#     elif player1 == '1' and cpu == paper:
#         print('Player1 Choice: ' + paper)
#         print('CPU Choice: ' +cpu)
#         print("Draw")
#     if player1 == '2' and cpu == paper:
#         print('Player1 Choice: ' + scissors)
#         print('CPU Choice: ' +cpu)
#         print("Player 1 Wins!")
#         break
#     elif player1 == '2' and cpu == rock:
#         print('Player1 Choice: ' + scissors)
#         print('CPU Choice: ' + cpu)
#         print('CPU Wins!')
#         break
#     elif player1 == '2' and cpu == scissors:
#         print('Player1 Choice: ' + scissors)
#         print('CPU Choice: ' +cpu)
#         print("Draw")
    


game_images = [rock, paper, scissors]

user_choice = int(input("What do you choose? Type 0 for Rock, 1 for Paper or 2 for Scissors.\n"))
print(game_images[user_choice])

computer_choice = random.randint(0, 2)
print("Computer chose:")
print(game_images[computer_choice])

if user_choice >= 3 or user_choice < 0: 
  print("You typed an invalid number, you lose!") 
elif user_choice == 0 and computer_choice == 2:
  print("You win!")
elif computer_choice == 0 and user_choice == 2:
  print("You lose")
elif computer_choice > user_choice:
  print("You lose")
elif user_choice > computer_choice:
  print("You win!")
elif computer_choice == user_choice:
  print("It's a draw")