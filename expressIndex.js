var express=require('express');
var app=express();
var things = require('./express.js');
app.use('/reena',things);
app.listen(3000);

