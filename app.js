//Require express
const express = require("express")

const app = express()

//Middleware

//Routes
app.get("/", (req, res) => {
  res.send("Hello Squirell")
})

//Start Server

app.listen(3000, () => {
  console.log("Gif Search Listening on Port localhost:3000!")
})
