var express = require('express');
var app = express();
var port = 8080;
var array = ['angler js','node js'];
var join = array.join(' and ');

// get
app.get('/log',(req,res)=>{
console.log(`join : ${join}`);
res.send(`array : ${join}`);
});

//port
app.listen(port,()=>{
console.log(`server started ${port}`);
});