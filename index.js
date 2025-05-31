const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hallo wereld!");
});

app.listen(port, () => {
  console.log(`App draait op http://localhost:${port}`);
});
