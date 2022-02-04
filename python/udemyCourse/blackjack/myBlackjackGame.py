import random
from art import logo


cards = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]

dealer_card1 = random.choice(cards)
dealer_card2 = random.choice(cards)
dealer_hand = [dealer_card1,dealer_card2]
dealer_hidden_hand = [dealer_card1]


player_card1 = random.choice(cards)
player_card2 = random.choice(cards)
player_hand = [player_card1,player_card2]
player_score = sum(player_hand)


def blackjack():
    print(logo)
     
    play = input("Welcome to blackjack. Would you like to play? 'y' to play 'n' to pass: ")
    if play == 'y':
        print(f"{player_hand} Your score is {player_card1 + player_card2}")
        print(f"{dealer_hidden_hand} Dealears score is {dealer_card1}")
    
        
    
    game = True

    while game:
        hit = input("Would you like another card? Type 'y' for card and 'n' to pass: ").lower()
        if hit == 'y':
            player_hits = random.choice(cards)
            player_hand.append(player_hits)
            player_score = sum(player_hand)
            print(f"{player_hand} Your new score is: {player_score}")
            print(f"{dealer_hidden_hand} The dealers score is: {dealer_card1}")
            if player_score > 21:
                print("You went over 21! BUST!")
                game = False 
                break
            elif player_score == 21:
                print("Blackjack!!! You Win!!!")
                print("f{Player_hand} Your score is: {player_score}")
        elif hit == 'n':
            player_score = sum(player_hand)
            print(f"{player_hand} Your score is: {player_score} ")
            tally()
            game = False


def tally():
    
    tallying = True
    dealer_score = sum(dealer_hand)
    player_score = sum(player_hand)

    while tallying:
        if player_score > dealer_score and dealer_score <= 21 or dealer_score == player_score:
            dealer_hits = random.choice(cards)
            dealer_hand.append(dealer_hits)
            dealer_score = sum(dealer_hand)
            print("Dealer hits")
            print(f"Your score: {player_score} Dealer Hand: {dealer_hand} Dealer score: {dealer_score}")

        elif dealer_score > player_score and dealer_score <= 21:
            print("dealer wins")
            print(f"Your Hand: {player_hand} Your Score: {player_score} Dealer Hand: {dealer_hand} Your score: {player_score} Dealer score: {dealer_score}")
            tallying = False
        elif dealer_score > 21:
            print("Dealer Busts! You win!")
            tallying = False
        elif dealer_score == 21 and dealer_score > player_score:
            print(f"Dealer Hand: {dealer_hand}")
            print('Dealer Wins! Blackjack!!')
            tallying = False


        
    
blackjack()
