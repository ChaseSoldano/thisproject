<<<<<<< HEAD
 var Models = require("mongodb://localhost/expressDB");
=======
 var Models = require("/models/models.js");
>>>>>>> a4870088ce3bdce32469a931155622a3fd75000e

 var User = new Models.User({
    username: "username",
    password: "password"

 });

 User.save(function(error) {
    console.log("Your user has been saved.");
 if (error) {
    console.error(error);
  }
});
