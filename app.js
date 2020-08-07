const express = require("express");
const app = express();

// creates an absolute path pointing to a folder called "views"
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

// app.js

app.get("/", (req, res, next) => {
  let data = {
    name: "Ironhacker",
    bootcamp: "Ironhack Web Dev"
  };

  res.render("index", data);
});


app.get('/about', (req, res, next) => {
  res.render('about');
});

app.listen(3000);
