//loading the .env files
require("dotenv").configDotenv()

//loading the express
const express = require("express");

//loading mongodb stuffs
const mongoose = require("mongoose");

mongoose.connect(process.env.mongodb_url)
.then(() => console.log('connected to MongoDB Atlas!'))
    .catch(err => console.error('MongoDB connection error', err))


//loading the cross origin stuff
const cors = require("cors");

//creating the server
let app = express()

//create routine (endpoints)
app.get("/fish/:id",(req,resp) =>{
    let mid = req.params.id;
    resp.json({"message":`testing microphone with id of ${mid}`});
    console.log("the endpoint has been accessed!!!")
});

// app.get("/goal?id=15",(req,res)=>{
//     res.json({"message":"i know too"})
// })

app.post("/sender",(req,res)=>{
    let data = req.body;
    res.json(data);
})

let myport = process.env.port

app.listen(myport, ()=>{
    console.log(`server running at ${myport}`);
})