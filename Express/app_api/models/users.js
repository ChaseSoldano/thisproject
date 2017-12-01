var mongo = require('mongodb');
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/expressDB";
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.createCollection("users", function(err, res){
    if(err) throw err;
    console.log("User Collection created");
    db.close();
  })
  console.log("User Database created!");

  var myobj = { email: "", passport:"" };
  db.collection("user").insertOne(myobj, function(err,res){
    if(err) throw err;
    console.log("User inserted info");
    db.close();
  })

  db.collection("users").findOne({}, function(err, res){
    if(err) throw err;
    console.log("result.user");
    db.close();
  })
  // db.close();
});

var usersSchema = new mongoose.Schema({
  email:{
    type: String,
    unique: true,
    required: true
  },
  name:{
    type: String,
    required: true
  },
  hash: String,
  salt: String
});

var Users = mongoose.model('users', usersSchema);

usersSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

usersSchema.method.validPassword = function(password){
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
  return this.hash === hash;
};

usersSchema.methods.generateJwt = function(){
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000)}), "MY_SECRET"}; //Do NOT keep secret in the code!
// };

module.exports = mongoose.model("users", usersSchema);
