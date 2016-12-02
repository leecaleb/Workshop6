var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.text());

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.use(express.static('../client/build'));
