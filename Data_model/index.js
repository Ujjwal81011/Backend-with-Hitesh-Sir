import express from "express"

 const app = express()
 
 const PORT = 3000

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