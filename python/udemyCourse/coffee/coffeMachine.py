from data import MENU, resources

r_water = resources['water']
r_milk = resources['milk']
r_coffee = resources['coffee']

prep = True

def cost(order):
    return MENU[order]['cost']

def check_espresso_resources(order):
    global r_water, r_coffee
    if MENU[order]['ingredients']['water'] > r_water:
        
        return "Sorry, we don't have enough water"
      
    elif MENU[order]['ingredients']['coffee'] > r_coffee:
        
        return "Sorry, we don't have enough coffee"
    else:
        r_water -= MENU[order]['ingredients']['water']
        r_coffee -= MENU[order]['ingredients']['coffee']
        print("You're in luck!" )
        return True

def check_resources(order):
    global r_water, r_coffee, r_milk
    if MENU[order]['ingredients']['water'] > r_water:
        
        return "Sorry, we don't have enough water."
    elif MENU[order]['ingredients']['milk'] > r_milk:
        
        return "Sorry, we don't have enough milk."
    elif MENU[order]['ingredients']['coffee'] > r_coffee:
        
        return "Sorry, we don't have enough coffee."
    else:
        r_water -= MENU[order]['ingredients']['water']
        r_coffee -= MENU[order]['ingredients']['coffee']
        r_milk -= MENU[order]['ingredients']['milk']
        print("You're in luck!" )
        return True

def pay(quarters, dimes, nickels, pennies):
    return quarters * .25 + dimes * .10 + nickels * .05 + pennies * .01
  
def calculate(pay, cost, order):
    if pay > cost:
        return f"Here is your change ${round(pay - cost,2)}. Enjoy your {order}!"
    elif pay < cost:
        return f"Sorry, that's not enough money. ${pay} refunded"
    else:
        return f"Enjoy your {order}!"
    
while prep:
    order = input('What would you like? (espresso/latte/cappuccino): ').lower()
    if order == 'off':
        prep = False
    elif order == 'report':
        print(f"Resources are: Water: {r_water}, Milk: {r_milk}, Coffee: {r_coffee}")
    elif order == 'espresso':
        total_cost = cost(order)
        
        res = check_espresso_resources(order)
        if res == True:
            print(f"You owe ${total_cost}")
            quarters = float(input("How many quarters?: "))
            dimes = float(input("How many dime?: "))
            nickels = float(input("How many nickels?: "))
            pennies = float(input("How many pennies?: "))
            payed = pay(quarters, dimes, nickels, pennies)
            print(calculate(payed, total_cost, order))
        else:
            print(check_espresso_resources(order))
    elif order == 'latte' or order == 'cappuccino':
        total_cost = cost(order)
        res = check_resources(order)
        if res == True:
            print(f"You owe ${total_cost}")
            quarters = float(input("How many quarters?: "))
            dimes = float(input("How many dime?: "))
            nickels = float(input("How many nickels?: "))
            pennies = float(input("How many pennies?: "))
            payed = pay(quarters, dimes, nickels, pennies)
            print(calculate(payed, total_cost, order))
        else:
            print(check_resources(order))
        


        








    


