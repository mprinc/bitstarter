#!/usr/bin/env node

var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var templateFile = "index.html";
  var templateRaw = fs.readFileSync(templateFile, { encoding: 'utf8'});
  response.send(templateRaw);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});