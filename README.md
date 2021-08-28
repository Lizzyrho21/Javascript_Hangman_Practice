# Javascript_Hangman_Practice
JS Hangman Assignment 

[Working from IronHack's JS hangman lab](https://github.com/ironhack-labs/lab-javascript-hangman)


An implementation of the classic 'Hang Man' Game
A random word is selected from an array of secret words at the start of the game

The player guesses a letter contained in the secret word

If the guessed letter is in the secret word, the letter is revealed

If the guessed letter is not in the secret word, they receive a strike

If the player receives 10 strikes (missed guesses) before the secret word is completed, they LOSE

If the player guesses all the letters in secret word before getting 10 strikes, they WIN

Provide a method for the player to guess letters

If player guesses a letter already guessed, let them know and do not count as a strike

Provide a method for the player to start over with a new game




TIPS:
Use Math.random() to choose a secret word form your array of words when the player starts the game.

10 simple images are provided to draw a simple hang man as the user makes incorrect guesses. You can use these images, or make your own. It's recommended that you name all 10 images with a sequence number so you can more easily display the next image from your code as you count the number of incorrect guesses.

(e.g. hman0.png, hman1.png, hman2.png ... hman10.png)

You'll want to mask the letters in the secret word that haven't been guessed yet, using the character of your choice.

You will need to check if the entered letter is in the current secret word and if it is, display the character at that index location.


Words. An array with some words. We will take a random word from this array, and it will be the word that the player will have to figure out.
Secret word. This will be an string to store the word selected randomly.
Letters. Another array, in this case just for letters. This one will store all the letters used by the player, to show them all. It will be very helpful for the player, to avoid select the same letter twice.
Errors left. Number of errors that the user can make until the end of the game.

