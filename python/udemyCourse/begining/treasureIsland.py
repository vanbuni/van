print('''
 .-.  .-.  --..::==
(   )(   )  //"
 '-'  '-'  /

vsm







       ________   ________    _________  ____________;_
      - ______ \ - ______ \ / _____   //.  .  ._______/
     / /     / // /     / //_/     / // ___   /
    / /     / // /     / /       .-'//_/|_/,-'
   / /     / // /     / /     .-'.-'
  / /     / // /     / /     / /
 / /     / // /     / /     / /
/ /_____/ // /_____/ /     / /
\________- \________-     /_/

     0000             0000        7777777777777777/========___________
   00000000         00000000      7777^^^^^^^7777/ || ||   ___________
  000    000       000    000     777       7777/=========//
 000      000     000      000             7777// ((     //
0000      0000   0000      0000           7777//   \\   //
0000      0000   0000      0000          7777//========//
0000      0000   0000      0000         7777
0000      0000   0000      0000        7777
 000      000     000      000        7777
  000    000       000    000       77777
   00000000         00000000       7777777
     0000             0000        777777777

unknown
''')
print("Welcome to 007.")
print("Your mission is to not die!") 
print('Follow the instruction on the screen, stay sharp.')

move1 =input("Pick your gun. Silver or gold gun? ").lower()

if move1 == 'gold':
    move2 = input("Good choice, now how would you like to travel? Drive or fly? ").lower()
    if move2 == "drive":
     move3 = input("Will you be taking the tunnel, bridge, or highway? ").lower()
    else:
     print("Your plane has been shot down. There were no survivors. Game over!!!")
    if move3 == 'highway':
       print("You made it safley, you truely are 007. Game over. You win!!!!!!!")
       print('''
###############################################################################
###########################################**##################################
##########################################*####################################
####################################**#########################################
######################################***######################################
########################################*#######**#############################
################################*#*###*#**#****  **############################
###############################****#****          *#####**#####################
##############################****#***             *####**#####################
##############################** ***              **####*######################
##############################******              **####*######################
######*#####**################**** *              **###**#######*##############
####***###*****###############*** *               *####*####*#** *   *#########
#######*#** *  *##############***                 *####*###*** *     **########
######****     *##############****                *####*###**  *      *########
#####*****      *#############*##*****        *****###**###**         **#######
####*******     *############**##** ****   *******####*###*#*   *      *#######
####****#**  **   ###########******# ****  ** #*#***##*###*#*        ***#######
#####** ***** **  *######*###** ***    **       ** *##*###***##    *#***#######
#####**  ****##*   *#####*###**         *          *#**##**##*#*  *############
######**     #*   ** *##**###**                    ##*###* ****   #***#**######
#####****   **    *** ##***##**         *         *##*####        *    **######
#######**         *** ### **#***        *         *#**####        *     #######
######**          **#####  *#***       **         *#**####*       *    *#######
######*            *###### ******       *        **#*#####*       *    *#######
#######    #*      *########******     *** **    **#*######*    * #*  *########
#######*  *        *########*****      **#**    **#**######*     **  **########
########*  ***    *#*########*****      *       **##*######*  **#*##**#########
######### *#      *#***######*****              **##**#####**  *******#########
#########****    *##***#######****             **##**######***  *****##########
##########*     *##****#######****  **#**********##**######* *     **##########
###########   **##*****######*#***            ***##*#######** **  **###########
################## * **##### **#***    * ********##*#*#####**  *###############
#################******#####   *****************############*** *##############
#################******####*    ##** *       ***#############******############
#################****#######     ##***       **####### *#######******##########
#################*###########     *##**     **#######   *######################
##############################      *#*******#####*#*   #######################
###############################       *#############*  *#######################
################################        *#########*#   *#* ####################
#################################*      ***##*######   #*   ###################
###################################    *########**##   #      #################
####################################    ########***#*  #      *################
#####################################   ########**##           **##############
######################################  ########*##*             ##############
#######*###*########################### *######*#*#*             *#############
######################################## ######***#*             *#############
####################**##################*##########*             *#############
###################################################**            *#############
####*###########*###**#########################*##***            *#############
####*##*#####################################****#***           *##############
#######*##*#################################*  **##**     *    **##############
##########**################################*  ***#*** ****  ****##############
#######*#####################################* ***##***  *******###############
####**#######****#############################* ***##**  *******############***
###*  *** ********############################********* * *****#############***
###*****   **** **############################******#*    ****##############*##
###*****    *******##########################*   *###*     **#############*####
###**  *** ******###***#########**##########** ** *****    *****###############
##** ****#*###***##**##*######***#*####************************######*#########
##**************##**###**####***###*##**#####************* * **################
#***  **************###**###***####*##*######********  **#** *######*#####*####
****  *#* *********####**###**####**#######****  *************########*##**####
***          ******####**##***####**########***  *#     *******#######****#####
               ***#####**##**#####**######****** *#**  *********###############
           *##****####*******#####**#####*****#*****  *******#*################
*##***       *****###********####***#####*****  ***   *****##* ##***###########
    * **         **#*********####***#####***          *****##*** ####*#########
       **          ###**  **********####* *            **  ***  *#### #########
        *                 ***  ****     *           *  *****##*######**########
       * **#                   ***     ###              **********###*#########
     ***    ****            ** **       *              **** *****###* #########
      *   **#**             **         #*##             ** *#******   #########
           ***#                      #######         * *#* ##*        ###*#####
             *         ***   *       ########*  *    **** ###*            *####
             # * * *    ***          ###### *#    ***   *####*       *   *#####
**           *#*  *   ****** **     #######  # ***     *####*           ######*
***      **  **      * ***** **       #####  #******* *####*          *#####**
*******         *    *****#*###**     ###### * *##**#*#*#**         #######**
###*******       *    ***#****#*      #####    ##########**        **######* **
#####* **#*  ***    *#*#**##*####     *####    #########**         ***#####****
Made By The Dutch Dude         02-28-96''')
    elif move3 == 'bridge':
       print('A missile was launched at the bridge, there were no survivors. Game over!')
    else:
       print('The tunnel was a trap! C4 explosives were planted. R.I.P. Game over!')
       
     
     

else:
  print("Ths silver gun jams..... You've been killed. Game over!!!")








    