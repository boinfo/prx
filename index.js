// app.js

var express = require('express')
var Unblocker = require('unblocker');

// Create Express Server
var app = express();

// Create Unblocker Instance, and Configure Our Express Server to Use It
var unblocker = new Unblocker({prefix: '/proxy/'});
app.use(unblocker);


// Launches Server on Port 8080
app.listen(8080).on('upgrade', unblocker.onUpgrade);
console.log("Node Unblocker Server Running On Port:", 8080)

