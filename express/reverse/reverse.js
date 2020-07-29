
const express = require('express');
const app = express();
const array = [10,20,30,40];
const port = 8080;

// reduce method

var arrayReverse = array.reverse();

app.get('/login',(req,res)=>{
  console.log('Array : ' + ' '+ arrayReverse);
  res.send('Array :'+ ' '+ arrayReverse); 
});

app.listen(port, () => {
  console.log(`Server Started At port ${port}`);
});


