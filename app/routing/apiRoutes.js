//Using the list of friends
var friendsArray = require("../data/friends.js");
var path = require("path");

//Exporting API Routes
module.exports = function(app) {
    //API get functions to retrieve all JSON data from /data/friends.js
    app.get("/api/friends", function(request, response) {
        response.json(friendsArray);
    });

    //Adding a new friend
    app.post("/api/friends", function(request, response) {
        response.json("Starting the post.");
            var userInput = request.body;
            var userScores = userInput.scores;
            var matchName; 
            var matchImage;
            var referenceScore = 100;

             //Loops through all friends in the friendsArray
             for (i = 0; i < friendsArray.length; i++) {
                var difference = 0;
                for (var j = 0; j < userScores.length; j++) {
                difference += Math.abs(parseInt(friendsArray[i].scores[j]) - parseInt(userScores[j]));
                }
                if (difference < referenceScore) {
                    matchName = friendsArray[i].name;
                    matchImage = friendsArray[i].photo;
                    referenceScore = difference;
                }
                friendsArray.push(userInput);
                response.json({matchName: matchName, matchImage: matchImage});
                console.log("A match was found!");
                console.log(matchName, matchImage);
            }
    });
};
        
/*
            //Loops through all friends in the friendsArray
            for (i = 0; i < friendsArray.length; i++) {
                if (userInput.name !== friendsArray[i].name) {
                    //And loop through the scores of the friends
                    for (var j = 0; j < userScores.length; j++) {
                        res.json("Starting the j loop.");
                        //Find the difference between the scores of all the friends in the friendsArray and the new user
                        difference[j] = Math.abs(parseInt(friendsArray["scores[]"][j]) - parseInt(friendsArray[i]["scores[]"][j]));
                        referenceScore += difference[j];
                    }
                    //Push those values to the scoresArray
                    //scoresArray.push(difference);
                    //Friends with the highest compatibility rates are the bestMatch
                    if (difference < referenceScore) {
                        res.json("Choosing the best match.");
                        bestMatch = friends[i];
                    }

                }
            }

            if (bestMatch) {
                res.json(bestMatch);
            } else {
                res.json("No clear matches yet! Try again soon!");
            }

    });


            //Loop through the scoresArray of all those differences 
            //and find the best match with the smallest difference
            for (var i = 0; i < scoresArray.length; i++) {
                if (scoresArray[i] <= scoresArray[bestMatch]) {
                    bestMatch = 1;
                }
            }
            
            matchName = friendsArray[bestMatch]; //friendsArray[i].name;
            res.json(matchName);
            //matchImage = friendsArray[i].photo;

            //Add a new user
            friendsArray.push(userInput);
            //Find a match
            res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
            console.log("A match was found!");
*/
