var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  name: String,
  date: String,
  location: String,
  description: String
});

module.exports = mongoose.model('Event', eventSchema);
