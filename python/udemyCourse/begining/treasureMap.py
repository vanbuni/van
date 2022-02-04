# 🚨 Don't change the code below 👇
row1 = ["⬜️","⬜️","⬜️"]
row2 = ["⬜️","⬜️","⬜️"]
row3 = ["⬜️","⬜️","⬜️"]
map = [row1, row2, row3]
print(f"{row1}\n{row2}\n{row3}")
position = input("Where do you want to put the treasure? ")
# 🚨 Don't change the code above 👆

#Write your code below this row 👇

# HOW I DID IT

# if position == '11':
#     map[0][0] = 'x'
# elif position == '12':
#     map[0][1] = 'x'
# elif position == '13':
#     map[0][2] = 'x'
# elif position == '21':
#     map[1][0] = 'x'
# if position == '11':
#     map[0][0] = 'x'
# elif position == '12':
#     map[0][1] = 'x'
# elif position == '13':
#     map[0][2] = 'x'
# elif position == '21':
#     map[1][0] = 'x'
# elif position == '22':
#     map[1][1] = 'x'
# elif position == '23':
#     map[1][2] = 'x'
# elif position == '31':
#     map[2][0] = 'x'
# elif position == '32':
#     map[2][1] = 'x'
# elif position == '33':
#     map[2][2] = 'x'  


horizontal = int(position[0])
vertical = int(position[1])

map[vertical - 1][horizontal -1] = 'X'
#Write your code above this row 👆

# 🚨 Don't change the code below 👇
print(f"{row1}\n{row2}\n{row3}")