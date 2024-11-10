import express from "express";
//const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("server is ready")
});

// get a list of 5 jokes
app.get("/api/jokes",(req,res) => {
    const jokes = [
        {
        id: 1,
        title: "first joke",
        content: "Majak tha bhai Majak"
        },
        {
        id: 2,
        title: "another joke",
        content: "you are so pretty this is truth and i am speeking truth this is false"
        },
        {
        id: 3,
        title: "third joke",
        content: "why are you crying are you mad?"
        },
        {
        id: 4,
        title: "fourth joke",
        content: "Parle-g khaoge..."
        },
        {
        id: 5,
        title: "fifth joke",
        content: "chala ja ....."
        }

    ]
    res.send(jokes)    
});

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`);
})