   const express = require("express");
   const app = express();

   app.get("/user", (req, res) => {
     const q = "SELECT * FROM users WHERE id = " + req.query.id;
     db.query(q, (err, rows) => res.send(rows));
   });
