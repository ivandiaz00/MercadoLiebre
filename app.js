const express = require("express");
const app = express();
const path = require("path");
app.use(express.static('public'));
const PORT = process.env.PORT || 3000;
app.get('/',(req,res)=>{
    res.sendFile(path.resolve('./views/home.html'))
})


app.listen(PORT,()=>{
    console.log('El server esta corriendo')
}) 
