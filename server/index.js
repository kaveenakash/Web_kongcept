const express = require("express");
const app = express();

const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "#Maniya225",
  database: "kongcept",
});
 
app.get("/", (req, res) => {

     
 
});

app.listen(3001, () => {
  console.log("Running on port 3001");
});
