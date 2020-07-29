
const express = require('express');
const app = express();
const array = ['html','css','js'];
const port = 8080;

// push method

var arrayPush = array.push('bootstrap');

app.get('/login',(req,res)=>{
  console.log('Array : ' + ' '+ array);
  res.send('Array :'+ ' '+ array); 
});

app.listen(port, () => {
  console.log(`Server Started At port ${port}`);
});

