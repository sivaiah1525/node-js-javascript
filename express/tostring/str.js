
const express = require('express');
const app = express();
const array = ['html','css','js','angler js','node js'];
const port = 8080;

// splice method

var arrayString = array.toString();

app.get('/login',(req,res)=>{
  console.log('Array : ' + ' '+ arrayString);
  res.send('Array :'+ ' '+ arrayString); 
});

app.listen(port, () => {
  console.log(`Server Started At port ${port}`);
});


