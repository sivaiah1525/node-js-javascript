
const express = require('express');
const app = express();
const array = [10,20,30,40];
const port = 8080;

// map method

var arrayMap = array.map((a)=> a != 10);

app.get('/login',(req,res)=>{
  console.log('Array : ' + ' '+ arrayMap);
  res.send('Array :'+ ' '+ arrayMap); 
});

app.listen(port, () => {
  console.log(`Server Started At port ${port}`);
});


