# enemies = 1

# def increase_enemies():
#   enemies = 2
#   print(f"enemies inside function: {enemies}")

# increase_enemies()
# print(f"enemies outside function: {enemies}")


#Local Scope

# def drink_potion():
#   potion_strength = 2
#   print(potion_strength)


# drink_potion() prints potion_strength
# print(potion_strength) gives error because potion_strength is local scope

#Global Scope

player_health = 10

def drink_potion():
  print(player_health)

drink_potion()