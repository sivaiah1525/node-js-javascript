
const express = require('express');
const app = express();
const array = [10,20,30,40];
const port = 8080;

// reduce method

var arrayReduce = array.reduce((s,p)=> s + p);

app.get('/login',(req,res)=>{
  console.log('Array : ' + ' '+ arrayReduce);
  res.send('Array :'+ ' '+ arrayReduce); 
});

app.listen(port, () => {
  console.log(`Server Started At port ${port}`);
});


