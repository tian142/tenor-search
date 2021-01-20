//Require express
const express = require("express")

const app = express()

//Middleware
const exphbs = require("express-handlebars")

app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

//Routes
app.get("/", (req, res) => {
  //set the url of the gif
  const gifUrl =
    "https://media1.tenor.com/images/561c988433b8d71d378c9ccb4b719b6c/tenor.gif?itemid=10058245"
  //render the hello-fif view, passing the gifUrl into the view to be displayed
  res.render("hello-gif", { gifUrl })
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
