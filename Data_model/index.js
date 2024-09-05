import express from "express"
import connectDB from "./config/database.js" // for connecting database

 const app = express()
 
 const PORT = 3000

 connectDB()  // calling connectDB function from config

 app.get('/', (req,res) => {
    res.send("hello backend");
 })
 app.get('/admin', (req,res) => {
    res.send("admin section");
 })
 app.get('/login', (req,res) => {
    res.send("login section");
 })

 app.listen(process.env.PORT || 3000, () => {
    console.log(`your server is running on ${PORT}`)
 })