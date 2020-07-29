var express = require('express');
var app = express();
var port = 8080;
var array = [10,20,30,40,10];
var arraykeys = array.keys();

// get 
app.get('/log',(req,res)=>{
console.log(`arrayIndex : ${arraykeys}`);
res.send(`arrayIndex : ${arraykeys}`);
});

// port
app.listen(port,()=>{
console.log(`server started ${port}`);
});