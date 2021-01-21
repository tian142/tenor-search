//Require express
const { response } = require("express")
const express = require("express")

const app = express()

const Tenor = require("tenorjs").client({
  Key: "RR9X218I56OU", // https://tenor.com/developer/keyregistration
  Filter: "high", // "off", "low", "medium", "high", not case sensitive
  Locale: "en_US", // Your locale here, case-sensitivity depends on input
})

//Middleware
const exphbs = require("express-handlebars")

app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

//Routes
app.get("/", (req, res) => {
  //Handle home page when you havent quired yet
  term = ""
  if (req.query.term) {
    term = req.query.term
  }

  // Tenor.search.Query("SEARCH KEYWORD HERE", "LIMIT HERE")

  Tenor.Search.Query(term, "10")
    .then(response => {
      //store gif from earch
      const gifs = response
      res.render("home", { gifs })
    })
    .catch(console.error)
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
