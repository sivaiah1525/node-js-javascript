
const express = require('express');
const app = express();
const array = [10,20,30,40,[10,20]];
const port = 8080;

// splice method

var arraySplice = array.splice(4,2);

app.get('/login',(req,res)=>{
  console.log('Array : ' + ' '+ array);
  res.send('Array :'+ ' '+ array); 
});

app.listen(port, () => {
  console.log(`Server Started At port ${port}`);
});


