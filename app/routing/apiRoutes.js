var friends = require("../data/friends");

module.exports = function (app) {
    // GET route to display JSON of all possible friends
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {

        var friendScores = req.body.scores;
        var scoresArray = [];

        for (var i = 0; i < friends.length; i++) {
            var tempHolder = 0;

            for (var j = 0; j < friendScores.length; j++) {
                tempHolder += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(friendScores[j])));
            };
            scoresArray.push(tempHolder);
        };

        var match = 0;
        var scoreCompare = 50;

        for (var i = 0; i < scoresArray.length; i++) {
            if (scoresArray[i] <= scoreCompare) {
                scoreCompare = scoresArray[1];
                match = i;
            }
        };

        res.json(friends[match]);
        console.log(req.body);

        friends.push(req.body);
        console.log("friend array " + friends);
    });
    


};