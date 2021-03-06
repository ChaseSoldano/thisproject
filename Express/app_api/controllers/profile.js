module.exports.register = function(req, res) {
  console.log("Registering user" + req.body.email);
  res.status(200);
  res.json({
    "message": "User registered: " + req.body.email
  });
};


var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.profileRead = function(req, res) {
  //If no user ID exists in the Jwt return a 401
  if (!req.payload._id) {
    res.staus(401).json({
      "message": "UnauthorizedError: private profile"
    });
  } else {
    //Otherwise continue
    User.findById(req.payload._id)
    .exec(function(err, user) {
      res.status(200).json(user);
    });
  }
};
