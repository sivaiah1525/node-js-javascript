var express = require('express');
var app =express();
var array = [10,20,30];
var fill = array.fill('node js');
var port = 9000;
// get
app.get('/fill',(req,res)=>{
 console.log(`fill : ${fill}`);
 res.send(`fill : ${fill}`);
});

// port
app.listen(port,()=>{
  console.log(`server start ${port}`);
});