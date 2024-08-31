require('dotenv').config() // must be written for using .env file
const express = require('express') // insteed of this we can write <import express from 'express';>
const app = express()
const port = 4000 //port where you wants to execute your app in your local host

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('Ujjwal Mishra')
})

app.get('/admin', (req,res) => {
    res.send('<h1> come on admin section </h1>')
})

app.get('/chai', (req,res) => {
    res.send('do you want to have a cup of CHAI')
})

app.listen(process.env.PORT, () => {  // here replace the port using procss.env.<port_name> that will be in .env file
  console.log(`Example app listening on port ${port}`)
})