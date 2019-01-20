
// import db from './db';
// import charity from "./Charity.js";

var express = require("express");
var app = express();


app.listen(3000, console.log("Listening"));
app.get('/', function (req, res) {
  res.send('hello world')
})
app.post('/hacks', function (req, res) {
  res.send('hacking world')
})
