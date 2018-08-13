#Gimme That Becky! 
##A FriendFinder App
Authored by: Rebecca Wieberdink

This app uses Nose.js and Express.js to help users find a compatible love interest!

The user chooses a score of 1-5 for each of the 10 survey questions. The program then takes the user's 10 different scores and compares it to every other member's scores to find the best compatibility match for each indiviudal! The app will take the user's answer to Q1 (3) and another's memeber's answer to Q1 (5). The app takes the difference between the 2 scores and finds he absolute value of it: 3 - 5 = |-2|. 

The app then takes the difference of every score of the user and every score of all the other site members and finds the sum of the differences for each pairing. Whichever friend pairing produces the lowest amount of differences becomes the best match for the user!

The biggest challenge in creating this app was synchronozing the .json() function within several embedded for loops. Using the function too soon within the .post() could result in the user being added to the friends array and subsequently paired up with themselves. This app is useful to anyone looking to understand how to build apps with Express.js, set up a server, and use strategic file pathing! 

https://pure-escarpment-91569.herokuapp.com/

Enjoy! 