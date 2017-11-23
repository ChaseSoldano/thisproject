var mongoose = require("mongoose");
var Users = require("/models/Users.js"); /* Imports the Users module. It contains the user schema we need. */
mongoose.connect("mongodb://localhost/users"); //users is the database name.

var db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", function(callback){
  console.log("Connection Succeeded."); /* Once the database connection has succeeded, the code in db.once is executed. */
});

var User = mongoose.model("User", Users.userSchema); //This creates the User model.

module.exports.User = User; /* Export the User model so index.js can access it. */
