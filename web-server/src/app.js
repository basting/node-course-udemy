const path = require("path");
const express = require("express");

const app = express();
const publicDirPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");
app.use(express.static(publicDirPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Index page from HBS",
    description: "Some sort of an index page",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About page from HBS",
    description: "Some sort of an about page",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help page from HBS",
    message: "Very helpful message",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "Sunny",
    location: "Guelph, Ontario",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
