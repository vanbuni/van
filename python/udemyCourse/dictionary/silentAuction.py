from art import logo
import os

print(logo)

print("Welcome to the silent auction")

clear = lambda: os.system("cls")
bids = {}
bidding_finished = False


def find_the_highest_bidder(bidding_record):
    highest_bid = 0
    winner = ""
    for bidder in bidding_record:
        bid_amount = bidding_record[bidder]
        if bid_amount > highest_bid:
            highest_bid = bid_amount
            winner = bidder
    print(f"The winner is {winner} with a bid of ${highest_bid}")


while not bidding_finished:
    name = input("What is your name?: ")
    price = int(input("What is your bid?: $"))
    bids[name] = price
    should_continue = input("Are there anymore bidders? Type 'yes' or 'no'.\n")
    if should_continue == 'no':
        bidding_finished = True
        find_the_highest_bidder(bids)
    
    













# bids = {}
# runner = True


# def auction(name, bid):
#     bids[name]=bid
       
  
    




# while runner:
#      name1 = input('What is your name?')
#      bid1 = int(input("What is your bid?"))
#      auction(name=name1,bid=bid1)
#      print(bids)
#      quit = input("Does anyone else want to place a bid, 'yes' or 'no' ?")
#      if quit == 'no':
#         for i in bids.values():
#             checker = i
#             winner = ''
#             print(checker)
#             if checker < i:
#                 winner = bids.get(i)
#             print(winner)


            
            
            
#         runner = False
# print(bids)




    
 