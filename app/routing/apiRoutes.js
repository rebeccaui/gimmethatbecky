//Using the list of friends
var friendsArray = require("../data/friends");

//Exporting API Routes
module.exports = function(app) {
    //API get functions to retrieve all JSON data from /data/friends.js
    app.get("/api/friends", function(request, response) {
        response.json(friendsArray);
    });

    //Adding a new friend
    app.post("/api/friends", function(request, response) {
            var userInput = req.body;
            var userScores = userInput.scores;
            var scoresArray = [];
            var matchName = ""; 
            var matchImage = "";
            var bestMatch = 0;

            //Loops through all friends in the friendsArray
            for (i = 0; i < friendsArray.length; i++) {
                var difference = 0;
                //And loop through the scores of the friends
                for (var j = 0; j < userScores.length; j++) {
                    //Find the difference between the scores of all the friends in the friendsArray and the new user
                    difference += Math.abs(parseInt(friendsArray[i].scores[j]) - parseInt(userScores[j]));
                }
                //Push those values to the scoresArray
                scoresArray.push(difference);
            }
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
    });
};