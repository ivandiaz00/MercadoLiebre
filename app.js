const express = require("express");
const app = express();
const path = require("path");
app.use(express.static('public'));
const puerto = 3002;
app.get('/',(req,res)=>{
    res.sendFile(path.resolve('./views/home.html'))
})


app.listen(puerto,()=>{
    console.log('El server esta corriendo')
}) 
