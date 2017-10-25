var express = require('express');

var app = express();

app.use(express.static(__dirname + "/view"));
app.use(express.static(__dirname + "/node_modules"));
app.use(express.static(__dirname + "/controllers"));

app.get('/', function (req, res) {
  res.send('testing port 3000! Its working!!!!')
})
app.listen(3000);
console.log("server running on port 3000");
