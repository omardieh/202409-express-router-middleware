const express = require("express");
const productsDB = require("./db-products.json");
const isAuthenticated = require("./middleware/isAuthenticated");

const app = express();
require("dotenv").config();

app.get("/api/products", isAuthenticated, (req, res) => {
  res.json(productsDB);
});

const port = process.env.PORT;
app.listen(port, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.info("App is running, visit : http://localhost:" + port);
});
