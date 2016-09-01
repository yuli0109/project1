# Hangman game!  


>At the begining of the Hangman game, player 1 would type the word(between 6-12 character) in an input box and click the button right beside it. The text in the input box then would be hidden instantly. Of course player 2 could not see the procees of typing. Then player 2 need to type one character in the same type each time or just guess the word directly. Player 2 would have only five chances. If the character is included in the word. The character would show up in the correct postion in that word. 
____________


>variables:  
var1 to store the word input by player1  
var2 to acount the move for input  
var3 to store the character input by player2  

---------------------------------------------------
Pseudocode:

1. The word created by player1 would be store in a variable as a string.
2. The string would then be split into individual character and each character would be stored in an array by order.
3. Count the length of that array and create same amount of <div> in html represent the each character. The character would be stored as an property of <div> 
4. Player 2 could click the aritificial keyboard to input the charcter, if the character was not included, it would be moved to anothr area and would not be able to click again
5. Also player 2 have choice to input the word directly using the input bot. The input of player 2 and compare with each word, if match, the textContent of <div> would be that character
6. If player 2 could give that word in five input chance, player 2 wins. Otherwise, player 1 win~  Fun ha?s