const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");
<<<<<<< HEAD
const mongoose = require('mongoose');
const errorhandler = require("errorhandler");
=======
// const connect = require('connect');
const errorhandler = require('errorhandler');
>>>>>>> 55af5e4ea3298c483cae828d3115c310b582687d

// const app = connect();
const app = express();

<<<<<<< HEAD
// app.set('port', 27017);
=======
if (process.env.NODE_ENV === 'development') {
  // only use in development
  app.use(errorhandler())
};

//app.set('port', 3000);
>>>>>>> 55af5e4ea3298c483cae828d3115c310b582687d

app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());


//connecting to MongoDB
mongoose.connect('mongodb://localhost/meanapp');
// new Mongo();
// new Mongo("localhost");
// new Mongo("localhost:27017");
// conn = new Mongo();
// db = conn.getDB("meanapp");
//db = connect("localhost:27017/meanapp");
// app.use(express.static(_dirname+'/Public'));
app.use(express.static(__dirname + "/view"));
app.use(express.static(__dirname + "/node_modules"));
app.use(express.static(__dirname + "/controllers"));
app.use(express.static(__dirname + "/Public"));

// app.get('/', function (req, res) {
//   res.send('testing port 3000! Its working!!!!')
// });

app.get('/', function (req, res) {
  res.sendFile(__dirname +'/Public/index.html');
});

// var server = app.listen(app.get('port'), function() {
//   var port = server.address().port;
//   console.log('running on server ' + port);
// });
const port = 3000;
<<<<<<< HEAD
 app.listen(port, ()=> {});
console.log("server running on port 3000");
=======
>>>>>>> 55af5e4ea3298c483cae828d3115c310b582687d

app.listen(port, () => {
  console.log("server running on port "+port);
});
exports = module.express = app;
