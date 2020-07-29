var apps = require('express');
var app = apps();
var array = ['10','10','10'];
var some =array.some((a) => a == 10);
var port = 4000;

// get 

app.get('/some', (req,res)=> {
    console.log(`Array : ${some}`);
    res.send(`Every : ${some}`);
});

//port

app.listen(port,()=>{
 console.log(`server start : ${port}`);
});
