var express = require('express');
var app = express();
var port = 8080;
var array = ['node js','anlgerjs'];
var arrayFrom =Array.from('anglerjs');

// get
app.get('/log',(req,res)=>{
 console.log(`from : ${arrayFrom}`);
 res.send(`from ${arrayFrom}`);
});

//port
app.listen(port,()=>{
console.log(`server started ${port}`);
});