
const express = require('express');
const app = express();
const array = [1,100,105,002,300,40];;
const port = 8080;

var sort = array.sort(function (a,b){
  return a-b;
});
app.get('/login',(req,res)=>{
  console.log('Array : ' + ' '+ sort);
  res.send('Array :'+ ' '+ sort); 
});

app.listen(port, () => {
  console.log(`Server Started At port ${port}`);
});


