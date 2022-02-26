


# game_level = 3

# enemies = ["Skeleton", "Zombies", "Alien"]


# if game_level < 5:
#     new_enemy = enemies[0]

# print(new_enemy)



#Modifying global scope


enemies = 1

# def increase_enemies():
#     global enemies
#     enemies += 1
#     print(f"enemies inside function {enemies}")

# increase_enemies()
# print(f"enemies outside function: {enemies}")


def increase_enemies():
    print(f"enemies inside function {enemies}")
    return enemies + 1
    

enemies = increase_enemies()
print(f"enemies outside function: {enemies}")