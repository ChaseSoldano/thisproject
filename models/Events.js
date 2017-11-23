var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var eventSchema = new Schema({ //This is where userSchema is defined.
     name: String,
     date: String,
     location: String,
     description: String

 });

module.exports = mongoose.model('Event', eventSchema); //Export userSchema so that models.js can access it.
