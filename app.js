//Require express
const express = require("express")

const app = express()

//Middleware
const exphbs = require("express-handlebars")

app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

//Routes
app.get("/", (req, res) => {
  console.log(req.query)
  res.render("home")
})

app.get("/greetings/:name", (req, res) => {
  //grab the name from the path provided
  const name = req.params.name
  //render the greetings view, passing along the name
  res.render("greetings", { name })
})

//Start Server

app.listen(3000, () => {
  console.log("Gif Search Listening on Port localhost:3000!")
})
