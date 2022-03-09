


MENU = {
    "espresso": {
        "ingredients": {
            "water": 50,
            "coffee": 18,
        },
        "cost": 1.5,
    },
    "latte": {
        "ingredients": {
            "water": 200,
            "milk": 150,
            "coffee": 24,
        },
        "cost": 2.5,
    },
    "cappuccino": {
        "ingredients": {
            "water": 250,
            "milk": 100,
            "coffee": 24,
        },
        "cost": 3.0,
    }
}

resources = {
    "water": 300,
    "milk": 200,
    "coffee": 100,
}

r_water = resources['water']
r_milk = resources['milk']
r_coffee = resources['coffee']

remaining_resources = r_water ,r_milk, r_coffee

def espresso(a):
     if a == 'espresso':
        if MENU[a]['ingredients']['water'] > resources["water"]:
            return "water"
      
        elif MENU[a]['ingredients']['coffee'] > resources["coffee"]:
            return "coffee"
        else:
            return "You're in luck!"
    

def order_res(a):
   

    if MENU[a]['ingredients']['water'] > resources["water"]:
        return "water"
    elif MENU[a]['ingredients']['milk'] > resources["milk"]:
        return "milk"
    elif MENU[a]['ingredients']['coffee'] > resources["coffee"]:
        return "coffee"
    else:
        return "You're in luck!"

def serve(a):
    return MENU[a]['cost']

def pay(quarters, dimes, nickels, pennies):
    return quarters * .25 + dimes * .10 + nickels * .05 + pennies * .01

prep = True

def choice(order):
    return MENU[order]
    
while prep:
    order = input('What would you like? (espresso/latte/cappuccino): ').lower()
    if order == 'off':
        prep = False
    elif order == 'report':
        print(f"Resources are: Water: {r_water}, Milk: {r_milk}, Coffee: {r_coffee}")
    order = input('What would you like? (espresso/latte/cappuccino): ').lower()
    choice = choice(order)
    if order == 'latte':
        print(order_res(order))
        r_water -= 200
        r_milk -= 150
        r_coffee -= 24
    elif order == 'cappuccino':
        r_water -= 250
        r_milk -= 100
        r_coffee -= 24
        print(order_res(order))
    elif order == 'espresso':
        r_water -= 50
        r_coffee -= 18
        print(espresso(order))
        

    
    cost = serve(order)
    print(f"You owe ${cost}")
    quarters = float(input("How many quarters?: "))
    dimes = float(input("How many dime?: "))
    nickels = float(input("How many nickels?: "))
    pennies = float(input("How many pennies?: "))
    payed = float(pay(quarters, dimes, nickels, pennies))
    owed = cost - payed
    # print(payed)
    change = payed - cost
    if payed == cost:
        print(f"Enjoy your {order}")
    elif payed > cost:
        print(f"Here is your change: {change}. Enjoy your {order}")
    else:
        print(f"You owe: {owed}")
    
        

