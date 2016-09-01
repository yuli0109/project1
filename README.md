# Hangman game!  

### Dsescription of game
>The Hangman game have single player model and twin player model.  
>In single player model player should click the selcet bar and pick a category for word. The system would pick a random word from the category library. Then the player could use the artificial keyword to input character.  
>In twin-players model, player 1 would type the wordin the input box and click the start button right beside it. The text in the input box then would be hidden instantly. Then player 2 could start guess the word. Player 2 would have only ten chances. If the character is included in the word. The character would show up in the correct postion in that word.  
>Click reset button to restart the game!
____________


### Technologies used
>1. Using jquery selector to select the correct elements 
>2. Adding event listeners to inputs, buttons, divs, select bar  
>3. Looping through multi-tags and creating, modifying elements in DOM using jquery
>4. Using jcanvas to draw on canvas and control the animation.

Pseudocode:

1. The word created by player1 would be store in a variable as a string.
2. The string would then be split into individual character and each character would be stored in an array by order.
3. Count the length of that array and create same amount of <div> in html represent the each character. The character would be stored as an property of <div> 
4. Player 2 could click the aritificial keyboard to input the charcter, if the character was not included, it would be moved to anothr area and would not be able to click again
5. Also player 2 have choice to input the word directly using the input bot. The input of player 2 and compare with each word, if match, the textContent of <div> would be that character
6. If player 2 could give that word in five input chance, player 2 wins. Otherwise, player 1 win~  Fun ha?s