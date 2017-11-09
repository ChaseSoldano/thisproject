var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({ //This is where userSchema is defined.
     username: String,
     password: String

 });
 
module.exports.userSchema = userSchema; //Export userSchema so that models.js can access it.
