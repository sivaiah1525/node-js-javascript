var express = require('express');
var app = express();
var array = [10,20,30,40];
var port = 8080;
var arrayFind = array.find((a)=> a == 10);
// get
app.get('/find',(req,res)=>{
console.log(`find : ${arrayFind}`);
res.send(`find : ${arrayFind}`);
});

// port
app.listen(port , ()=>{
console.log(`server started ${port}`);
});