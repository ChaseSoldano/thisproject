var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.register = function(req, res) {
  console.log("Registering user" + req.body.email);
  res.status(200);
  res.json({
    "message": "User registered: " + req.body.email
  });
};
