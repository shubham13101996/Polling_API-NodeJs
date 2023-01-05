const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

const db = require("./config/mongoose");


app.listen(port, (err)=>{
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`server is running on the port: ${port}`);

});