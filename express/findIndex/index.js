var express = require('express');
var app = express();
var array = [10,20,30];
var port = 9000;
var findIndex = array.findIndex((a)=> a == 30);

// get
app.get('/index',(req,res)=>{
 console.log(`find : ${findIndex}`);
 res.send(`findIndex : ${findIndex}`);
});

//port
app.listen(port,()=>{
console.log(`server started ${port}`);
});