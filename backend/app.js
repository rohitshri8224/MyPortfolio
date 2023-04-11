require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/connection.js");
const router = require("./Routes/router");
const path = require("path");
const port = process.env.PORT || 6002;


app.use(cors());
app.use(express.json());

app.use(router)


app.use(express.static(path.join(__dirname,'./frontend/build')))

app.get('*', function(req,res){
    res.sendFile(path.join(__dirname,'./frontend/build/index.html'))
})

app.listen(port,()=>{
    console.log("server start");
})