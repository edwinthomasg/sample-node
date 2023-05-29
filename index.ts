const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("hello world"));

app.listen(3200, () =>
  console.log("server listening on : http://localhost:3200")
);
