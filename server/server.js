require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/connection.js");
const router = require("./Routes/router.js");

const port = process.env.PORT || 6002;


app.use(cors());
app.use(express.json());

app.use(router)


app.use("/uploads",express.static("./uploads"));
app.use("/files",express.static("./public/files"));

app.listen(port,()=>{
    console.log("server start");
})