import random


# Split string method
names_string = input("Give me everybody's names, separated by a comma. ")
names = names_string.split(", ")
# 🚨 Don't change the code above 👆

#Write your code below this line 👇

# a = len(names)
# random_choice = random.randint(0, a - 1)
# person_who_will_pay = names[random_choice]
# print(person_who_will_pay + ' is going to by the meal today')

person_who_will_pay = random.choice(names)
print(person_who_will_pay)