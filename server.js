const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");

  /* this is way faster than doing
  const fs = require("fs");
  fs.readFile("./index.html", "utf-8", (err, data) => response.send(data));
  */
});

// static file serving, see: https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.listen(3000, () => console.log("server listening on port 3000"));
