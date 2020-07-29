var express = require('express');
var app = express();
var port = 8080;
var array = [10,20,30,40];
var arrayIndex = array.indexOf(40);

// get 
app.get('/log',(req,res)=>{
console.log(`arrayIndex : ${arrayIndex}`);
res.send(`arrayIndex : ${arrayIndex}`);
});

// port
app.listen(port,()=>{
console.log(`server started ${port}`);
});