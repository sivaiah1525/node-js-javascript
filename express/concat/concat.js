const express = require('express');
const app = express();
const array1 = ['html','css','js'];
const array2 = ['angler js','node js'];
const port = 8000;

// push method

var arrayConcat = array1.concat(array2);

app.get('/login',(req,res)=>{
  console.log('Array : ' + ' '+ arrayConcat);
  res.send('Array :'+ ' '+ arrayConcat); 
});

app.listen(port, () => {
  console.log(`Server Started At port ${port}`);
});

