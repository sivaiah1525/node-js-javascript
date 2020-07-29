var express = require('express');
var app = express();
var port = 8080;
var array = [10,20,30];
var check = Array.isArray(array);

// get 
app.get('/log',(req,res)=>{
console.log(`Array : ${check}`);
res.send(`Array: ${check}`);
});

//port
app.listen(port,()=>{
 console.log(`server started ${port}`);
});