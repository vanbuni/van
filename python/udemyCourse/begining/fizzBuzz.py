for number in range(1, 101):
    if ( number % 3 == 0 and number % 5 == 0):
        print(f"{number} FIXXBUZZ!")
    elif (number % 3 == 0 ):
        print(f"{number} FIZZ!")
    elif (number % 5 == 0 ):
        print(f"{number} BUZZ!")
    else:
        print(number)
    
    