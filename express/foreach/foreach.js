var express = require('express');
var app = express();
var port = 8080;
var array = [10,20,30,40];
var arrayForeach = array.forEach((ele,index) => {
     console.log(` element: ${ele}  index ${index}`);
});

// get
app.get('/log',(req,res)=> {
 console.log(`forEach : ${arrayForeach}`);
 res.send(`forEach : ${arrayForeach}`);
});

// port
app.listen(port,()=>{
console.log(`server started ${port}`);
});