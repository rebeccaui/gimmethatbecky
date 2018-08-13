//Using the list of friends
var friendsArray = require("../data/friends.js");
var path = require("path");

//Exporting API Routes
module.exports = function(app) {
    //API get functions to retrieve all JSON data from /data/friends.js
    app.get("/api/friends", function(req, res) {
        res.json(friendsArray);
    });

    //Adding a new friend
    app.post("/api/friends", function(req, res) {
        //Handling client request and isolating the user's scores for comparison
        var userInput = req.body;
        var userScores = userInput.scores;
        //The difference between the user's scores and the scores of each person in the array.
        var difference;
        //
        var bestMatch = {
            name: "",
            photo: "",
            referenceScore: 100
        };

        //Loops through all friends in the friendsArray
        for (i = 0; i < friendsArray.length; i++) {
            //Isolate a friend for conditional statements
            var currentFriend = friendsArray[i];
            difference = 0;
            //Then loop through the scores of each friend in the friendsArray
            for (var j = 0; j < currentFriend.scores.length; j++) {
                //Isolate the two sets of scores that need comparing: the user and any friend from the array
                var currentUserScore = userScores[j];
                var currentFriendScore = currentFriend.scores[j];
                //Find the difference between each of the scores 
                //and add them up to produce a total difference between the two candidates
                difference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }
            //If the sum of the differences between the user and a friend
            //is less than the differences of the current bestMatch 
            //Set the bestMatch as that currentFriend
            if (difference <= bestMatch.referenceScore) {
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.referenceScore = difference;
            }
        }
        //Push the user's data to the friendsArray to store it after a match has already been found
        friendsArray.push(userInput);
        //Return the bestMatch and display their name and photo to the user
        res.json(bestMatch);
        console.log("A match was found!");
    });
};