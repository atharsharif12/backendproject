require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
    res.send('welcome to twitter')
  })

  app.get('/login',(req,res)=>{
    res.send("Welcome to Login Page");

  })
  app.get('/home',(req,res)=>{
      res.send("Welcome To Home Page");
  })
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})