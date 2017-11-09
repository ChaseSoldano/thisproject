 var Models = require("C:/Users/jpatt/workspace/thisproject/models/models.js");

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
