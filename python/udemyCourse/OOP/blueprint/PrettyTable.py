import prettytable
from prettytable import PrettyTable


table =PrettyTable()
# table.field_names =["Pokemon Name","Type"]
# table.add_row(['Pikachu','Electric' ])
# table.add_row(['Sqirtule','Water' ])
# table.add_row(['Charmander','Fire' ])


table.add_column("Pokemon Name", ['Pikachu','Sqirtule','Charmander'])
table.add_column("Pokemon Name", ['Fire','Water','Fire'])
table.align = 'l'
print(table)