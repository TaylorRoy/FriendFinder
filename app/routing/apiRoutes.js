var users = require("../data/friends.js");

module.exports = function(app) {
    // Displays all characters
app.get("/api/users", function (req, res) {
    return res.json(users);
});

// Displays a single character, or returns false
app.get("/api/users/:user", function (req, res) {
    var chosen = req.params.user;

    console.log(chosen);

    for (var i = 0; i < users.length; i++) {
        if (chosen === users[i].routeName) {
            return res.json(users[i]);
        }
    }

    return res.json(false);
});

// Create New Characters - takes in JSON input
app.post("/api/users", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newcharacter = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

    console.log(newcharacter);

    users.push(newcharacter);

    res.json(newcharacter);
});
   
}
