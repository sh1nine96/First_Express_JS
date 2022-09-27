// import express from "express";
// import { path } from "path";
// we can do same as follows too
const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// const myOwnMiddleware = (req, res, next) => {
//   console.log(req);
//   next();
// };

// to server the public folder we can do this
app.use(express.static(path.join(__dirname, "public")));
// app.use(myOwnMiddleware);

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
  console.log(`Example app listening on port ${port}`);
});
