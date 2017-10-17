var express = require('express');

var app = express();

app.use(express.static(__dirname + "/view"));
app.use(express.static(__dirname + "/node_modules"));

app.listen(3000);
console.log("server runnng on port 3000");
