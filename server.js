const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");

  /* this is way faster than doing
  const fs = require("fs");
  fs.readFile("./index.html", "utf-8", (err, data) => response.send(data));
  */
});

app.get("/static/main.js", (request, response) => {
  response.sendFile(__dirname + "/static/main.js");
});

app.get("/static/main.css", (request, response) => {
  response.sendFile(__dirname + "/static/main.css");
});

app.listen(3000, () => console.log("server listening on port 3000"));
