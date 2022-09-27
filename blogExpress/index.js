const express = require("express");
// import { engine } from "express-handlebars";
var handlebars = require("express-handlebars");
const path = require("path");

const app = express();
const port = 3000;

//Sets our app to use the handlebars engine
app.set("view engine", "handlebars");

// Sets handlebars configurations
app.engine(
  "handlebars",
  handlebars.engine({
    layoutsDir: __dirname + "/views/layouts",
  })
);

app.use(express.static("public"));

// app.set("views", "./views");

// app.use(express.static(path.join(__dirname, "static")));
app.use("/", require(path.join(__dirname, "/routes/blog")));

app.get("/hello/:name", (req, res) => {
  res.send("Hello World! of: " + req.params.name);
});

app.get("/about", (req, res) => {
  //   res.send("about");
  //   res.sendFile(path.join(__dirname, "index.html"));
  //   res.status(500);
  res.json({ shubham: 26, honey: 38 });
});

app.listen(port, () => {
  console.log(`Blog app listening on port ${port}`);
});
