


# LISTS

from types import DynamicClassAttribute


states_of_america = ['Dleware', 'New York', 'California', 'Texas', 'Iowa']

# print(states_of_america[2])
newYork = states_of_america[0]
# print(newYork)


states_of_america[2] = 'New-York'
# print(states_of_america[2])

states_of_america.append('Colorado')
# print(states_of_america)

states_of_america.extend(['Kansas', 'Minnesota'])
# print(states_of_america)

states_of_america.insert(2, 'Oregon') 
print(states_of_america)

states_of_america.pop(1)

print(states_of_america)




fruits = ['Strawberries', 'Nectorines', 'Apples', 'Grapes', 'Peaches', 'Cherries', 'Pears']
vegatables = ['Spinach', 'Kale', 'Tomatoes', 'Celery', 'Potatoes']
dirty_dozen = [fruits, vegatables]
print(dirty_dozen[0][0])