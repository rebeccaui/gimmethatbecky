# Gimme That Becky! 
## A FriendFinder App
Authored by: Rebecca Wieberdink

This app uses Node.js and Express.js to help users find a compatible love interest!

The user chooses a score of 1-5 for each of the 10 survey questions. The program then takes the user's 10 different scores and compares it to every other member's scores to find the best compatibility match for each indiviudal! The app will take the user's answer to Q1 (3) and another's memeber's answer to Q1 (5). The app takes the difference between the 2 scores and finds he absolute value of it: 3 - 5 = |-2|. 

The app then takes the difference of every score of the user and every score of all the other site members and finds the sum of the differences for each pairing. Whichever friend pairing produces the lowest amount of differences becomes the best match for the user!

The biggest challenge in creating this app was synchronozing the .json() function within several embedded for loops. Using the function too soon within the .post() could result in the user being added to the friends array and subsequently paired up with themselves. This app is useful to anyone looking to understand how to build apps with Express.js, set up a server, and use strategic file pathing! 

![Gimme That Becky](/app/public/screenshot.jpg)


## In order to run this program...

1. Click the green *Clone or Download* button. Copy the link provided or press the clipboard button. Open your Command Line Interface (CLI), and type **git clone** and paste the link. Hit enter.
2. In the Command Line Interface, navigate your way into the folder that you just cloned. 
3. Once in the main folder of the clone, type **npm install** and hit Enter, which will download the necessary modules. 
4. Now type **node server** and hit Enter in the command line.
5. Open up your localhost:8080 in a browser window or whichever host the program requires (Possibles: 3000, 3030, 8000, 8080)

https://pure-escarpment-91569.herokuapp.com/

Enjoy! 
