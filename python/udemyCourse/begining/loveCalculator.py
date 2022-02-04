#My Solution

# print("Welcome to the love calculator")
# name1 = input("What is your name? \n")
# name2 = input("What is their name? \n")

# t1 = name1.lower().count('t')
# r1 = name1.lower().count('r')
# u1 = name1.lower().count('u')
# e1 = name1.lower().count('e')

# l1 = name1.lower().count('l')
# o1 = name1.lower().count('o')
# v1 = name1.lower().count('v')
# e1 = name1.lower().count('e')

# t2 = name1.lower().count('t')
# r2 = name1.lower().count('r')
# u2 = name1.lower().count('u')
# e2 = name1.lower().count('e')

# l2 = name1.lower().count('l')
# o2 = name1.lower().count('o')
# v2 = name1.lower().count('v')
# e2 = name1.lower().count('e')

# isTrue = t1 + t2 + r1 + r2 + u1 + u2 + e1 + e2
# love = l1 + l2 + o1 + o2 + v1 + v2 + e1 + e2
# trueLove = str(isTrue) + str(love)
# trueLoveInt = int(trueLove)

# print(love)
# print(isTrue)
# print(str(isTrue) + str(love))
# print(trueLoveInt)


# if trueLoveInt < 10 or trueLoveInt > 90:
#     print(f"Your score is {trueLoveInt}, you go together like 
# if trueLoveInt < 10 or trueLoveInt > 90:
#     print(f"Your score is {trueLoveInt}, you go together like coke and mentos")
# elif trueLoveInt >= 40 and trueLoveInt <= 50:
#     print(f"Your score is {trueLoveInt}, you are alright together")
# else:
#     print(f"Your score is {trueLoveInt}")")
# elif trueLoveInt >= 40 and trueLoveInt <= 50:
#     print(f"Your score is {trueLoveInt}, you are alright together")
# else:
#     print(f"Your score is {trueLoveInt}")


#Her Solution

print("Welcome to the love calculator")
name1 = input("What is your name? \n")
name2 = input("What is their name? \n")


combined_string = name1 + name2
lower_case_string = combined_string.lower()

t = lower_case_string.count("t")
r = lower_case_string.count("r")
u = lower_case_string.count("u")
e = lower_case_string.count("e")
true = t + r + u + e

l = lower_case_string.count("l")
o = lower_case_string.count("o")
v = lower_case_string.count("v")
e = lower_case_string.count("e")
love = l + o + v + e

love_score = int(str(true) + str(love ))



if (love_score < 10) or (love_score > 90):
    print(f"Your love score is {love_score}, you go together like coke and mentos")
elif (love_score >= 40) and (love_score <= 50):
    print(f"Your score is {love_score}, you are alright together")
else:
    print(f"Your score is {love_score}")