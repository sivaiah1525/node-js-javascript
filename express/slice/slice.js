
const express = require('express');
const app = express();
const array = [10,20,30,40,[10,20]];
const port = 8080;

// reduce method

var arraySlice = array.slice(0);

app.get('/login',(req,res)=>{
  console.log('Array : ' + ' '+ arraySlice);
  res.send('Array :'+ ' '+ arraySlice); 
});

app.listen(port, () => {
  console.log(`Server Started At port ${port}`);
});


