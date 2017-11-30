const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const connect = require('connect');
const errorhandler = require('errorhandler');
let eventController = require(__dirname + '/controllers/eventController');


// const app = connect();
const server = express();

//if (process.env.NODE_ENV === 'development') {
 // only use in development
 server.use(errorhandler())
//
// server.set('port', 3000);

server.use(bodyParser.urlencoded({extended: false}));
// parse application/json
server.use(bodyParser.json());


// app.use(express.static(_dirname+'/Public'));

//server.use(express.static(__dirname + "/views"));
server.use('/node_modules', express.static(__dirname + "/node_modules"));
//server.use(express.static(__dirname + "/controllers"));
server.use('/Public', express.static(__dirname + "/Public"));

// app.get('/', function (req, res) {
//   res.send('testing port 3000! Its working!!!!')
// });

server.get('/', function (req, res) {
 res.sendFile(__dirname +'/Public/views/index.html');
});
server.get('/events', eventController.listEvents);
server.get('/events/:id', eventController.detailEvent);
server.post('/events', eventController.createEvent);
server.put('/events/:id', eventController.updateEvent);
server.delete('/events/:id', eventController.deleteEvent);




const port = 3000;
server.listen(port, () =>{
 console.log("server running on port" + port);
});

//connecting to MongoDB
mongoose.connect('mongodb://localhost/eventsDB');
//console.log("Connected correctly to server");
mongoose.connection.once('open', function(error){
  if(error) {
    console.log('Database connection error', error);
    return;
  }
   console.log('Database connection established', mongoose.connection.host, mongoose.connection.port);
});
// (server.get('port'), function() {
//   var port = server.address().port;
//   console.log('running on server ' + port);
// });
// app.listen(3000);
// console.log("server running on port 3000");

exports = module.express = server;
