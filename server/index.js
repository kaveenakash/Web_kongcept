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

     
  const sql="select e.emp_id,emp_name,emp_email,emp_photo,br.branch_name,b.bank_name from Bank b,Employee e,bank_branch br where b.bank_id = br.bank_id and br.branch_id = e.branch_id";
  db.query(sql, (err, result) => {
    res.send(result);
  });
});

app.listen(3001, () => {
  console.log("Running on port 3001");
});
