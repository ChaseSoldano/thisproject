const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
// const errorhandler = require("errorhandler");
let eventController = require(__dirname + '/controllers/eventController.js');

// const app = connect();
const server = express();
mongoose.connect('mongodb://localhost/eventsDB');

// app.set('port', 27017);

//app.set('port', 3000);

server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());


//connecting to MongoDB
//mongoose.connect('mongodb://localhost/meanapp');
// new Mongo();
// new Mongo("localhost");
// new Mongo("localhost:27017");
// conn = new Mongo();
// db = conn.getDB("meanapp");
//db = connect("localhost:27017/meanapp");
// app.use(express.static(_dirname+'/Public'));

// server.use(express.static(__dirname + "/views"));
server.use('/node_modules', express.static(__dirname + "/node_modules"));
// server.use(express.static(__dirname + "/controllers"));
server.use('/Public', express.static(__dirname + "/Public"));

// app.get('/', function (req, res) {
//   res.send('testing port 3000! Its working!!!!')
// });

server.get('/', function (req, res) {
  res.sendFile(__dirname +'/Public/views/index.html');
});
server.get('/events', eventController.listEvents);
server.get('/events:id', eventController.detailEvent);
server.post('/events', eventController.createEvent);
server.put('/events:id', eventController.updateEvent);
server.delete('/events/:id', eventController.deleteEvent);

// var server = app.listen(app.get('port'), function() {
//   var port = server.address().port;
//   console.log('running on server ' + port);
// });
const port = 3000;
server.listen(port, () => {
  console.log("server running on port "+port);
});
exports = module.express = server;
