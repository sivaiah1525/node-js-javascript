var express = require('express');
var app =express();
var array = [10,20,30];
var port = 8080;
var arrayFilter = array.filter((a)=> a !== 10);

// get
app.get('/log',(req,res)=> {
 console.log(`filter : ${array}`);
 res.send(`filter : ${arrayFilter}`);
});

//port
app.listen(port,()=>{
console.log(`server started ${port}`);
});