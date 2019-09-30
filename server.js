const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("hello there");
});

app.listen(3000, () => console.log("server listening on port 3000"));
