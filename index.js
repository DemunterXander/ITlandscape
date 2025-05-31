const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("CICD");
});

app.listen(port, () => {
  console.log(`App draait op http://localhost:${port}`);
});
