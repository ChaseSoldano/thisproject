//var mongo = require('mongodb');
var mongoose = require('mongoose');
//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/expressDB";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   db.createCollection("Register", function(err, res){
//     if(err) throw err;
//     console.log("Collection created");
//     db.close();
//   })
//   console.log("Database created!");
//
//   var myobj = { name: "", email: "", password:"" };
//   db.collection("Register").insertOne(myobj, function(err,res){
//     if(err) throw err;
//     console.log("inserted info");
//     db.close();
//   })
//
//   db.collection("Register").findOne({}, function(err, res){
//     if(err) throw err;
//     console.log("test");
//     db.close();
//   })
  // db.close();
//});
// var Register = require('./routes/Register');
var registerSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});
mongoose.model('Register', registerSchema);

// Create an instance of model SomeModel


// mongoose.connect('mongodb://localhost/expressDB');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error: '));

// var routes = require('./app_api/routes/apiroutes');

// app.use('/', apiroutes);
// var app = express();

// create a schema
// var registerSchema = new mongoose.Schema({
//
// var Register = mongoose.model("Register", registerSchema)
//       name: "Beata",
//       email:"beatacable@gmail.com",
//       passport:"pass123"0000000000000000000000000000000000000000000000000000000000000000000
// }); //This creates the Register model.

// Register.save(function (err, register) {
//   if (err) return console.error(err);
//   console.log("Im in!");
// });
// Register.find(function (err, register) {
//   if (err) return console.error(err);
//   console.log("its working-register");
// })



//module.exports = mongoose.model("Register", registerSchema);
