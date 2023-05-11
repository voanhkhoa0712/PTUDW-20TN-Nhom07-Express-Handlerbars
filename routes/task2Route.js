const express = require("express");
const router = express.Router();
const accounts = require("../data").accounts;

router.get("/", (req, res) => {
  const salary = req.query.salary || 0;
  console.log(salary);
  res.locals.accounts = accounts;
  accounts.forEach((item) => (item.salary = salary));
  res.locals.salary = salary;
  res.render("task2");
});

module.exports = router;
