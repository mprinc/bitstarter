#!/usr/bin/env node

var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

console.log("__dirname:"+__dirname);

app.configure(function(){
  app.use(express.static(__dirname + '/public'));
});

app.get('/', function(request, response) {
  var templateFile = "index.html";
  // templateRaw = fs.readFileSync(templateFile, { encoding: 'utf8'});
  var templateBuffer = fs.readFileSync(templateFile);
  var templateRaw = templateBuffer.toString('utf-8')
  response.send(templateRaw);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});