const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const errorhandler = require("errorhandler");
const apiroutes = require('./Express/app_api/routes/apiroutes')
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const Register = require('./Express/app_api/models/Register')
const user = require('./Express/app_api/models/users')
const passport = require('./config/passport');
const flash   = require('connect-flash');
const morgan  = require('morgan');
const cookieParser = require('cookie-parser');
const session    = require('express-session');
const routes = require('./models/routes.js'); // load our routes and pass in our app and fully configured passport
const configDB = require('./config/database.js');
const fs = require('fs');
// const user = require('./models/users');
const LocalStratgy = require('passport-local').Strategy;




// const app = connect();
const app = express();


// app.set('port', 27017);
if (process.env.NODE_ENV === 'development') {
  // only use in development
  app.use(errorhandler())
};
app.use('/', apiroutes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


//connecting to MongoDB
mongoose.connect('mongodb://localhost/expressDB');
//console.log("Connected correctly to server");
mongoose.connection.once('open', function(error){
  if(error) {
    console.log('Database connection error', error);
    return;
  }
   console.log('Database connection established', mongoose.connection.host, mongoose.connection.port);
});

// Load schema Models
fs.readdirSync(__dirname + '/Express/app_api/models/')
.forEach(function(fileName){
  if (fileName == 'Register.js') {
    console.log("Schema", fileName);
    require(__dirname + '/Express/app_api/models/' + fileName);
  }
});

app.use(express.static(__dirname + "/view"));
app.use(express.static(__dirname + "/node_modules"));
app.use(express.static(__dirname + "/controllers"));
app.use(express.static(__dirname + "/Public"));
app.set('views', __dirname + '/Public');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.get('/', function(req, res){
  res.render('index');
});
console.log("Parser", bodyParser);

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());
app.use(express.static(__dirname + "/Express"));
//app.use(express.static(__dirname + "/models"));



app.use(function(req,res,next){
  console.log(req.body)
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

const port = 3000;
app.listen(port, () => {
  console.log("server running on port "+port);
});
exports = module.express = app;
