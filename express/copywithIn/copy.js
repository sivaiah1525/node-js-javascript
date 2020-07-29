const express = require('express');
const app = express();

const port = 2000;

// copywithIn
var array = ['html','css','js','node js'];
var copy = array.copyWithin(2,0);

// get request

app.get('/ok',(req,res)=>{
  console.log(` copy :  ${copy}`);
  res.send(`copy : ${copy}`);
});

// port
app.listen(port, ()=>{
console.log(`server start ${port}`);
});
