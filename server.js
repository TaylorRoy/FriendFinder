// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var users = require("./app/data/friends.js");

// console.log(friends);

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + 'public'));


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
require('./app/routing/htmlRoutes.js')(app, path)

require('./app/routing/apiRoutes.js')(app);

// // Displays all characters
// app.get("/api/users", function (req, res) {
//     return res.json(users);
// });

// // Displays a single character, or returns false
// app.get("/api/users/:user", function (req, res) {
//     var chosen = req.params.user;

//     console.log(chosen);

//     for (var i = 0; i < users.length; i++) {
//         if (chosen === users[i].routeName) {
//             return res.json(users[i]);
//         }
//     }

//     return res.json(false);
// });

// // Create New Characters - takes in JSON input
// app.post("/api/users", function (req, res) {
//     // req.body hosts is equal to the JSON post sent from the user
//     // This works because of our body parsing middleware
//     var newcharacter = req.body;

//     // Using a RegEx Pattern to remove spaces from newCharacter
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

//     console.log(newcharacter);

//     users.push(newcharacter);

//     res.json(newcharacter);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
    
});