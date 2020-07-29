const express = require('express');
const app = express();
const array = ['html','css','js'];
const port = 8080;

// un shift method

var arrayunshift = array.unshift('angler js');

app.get('/login',(req,res)=>{
  console.log('Array : ' + ' '+ array);
  res.send('Array :'+ ' '+ array); 
});

app.listen(port, () => {
  console.log(`Server Started At port ${port}`);
});

