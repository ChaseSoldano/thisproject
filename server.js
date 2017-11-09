const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const errorhandler = require("errorhandler");

const app = express();

// app.set('port', 27017);

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
 app.listen(port, ()=> {});
console.log("server running on port 3000");

exports = module.express = app;
