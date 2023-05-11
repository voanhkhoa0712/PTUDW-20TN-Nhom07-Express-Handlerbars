const express = require("express");
const router = express.Router();
const zodiacs = require("../data").zodiacs;

router.get("/", (req, res) => {
  res.render("task4", { zodiacs });
});

router.get("/:zodiac", (req, res) => {
  const zodiac = req.params.zodiac;
  const selectedZodiac = zodiacs.filter((item) => item.name == zodiac);
  const zodiacProp = selectedZodiac.length > 0 ? selectedZodiac[0] : zodiacs[0];
  console.log(zodiacProp);

  res.render("task4-details", { zodiacs: zodiacs, detail: zodiacProp });
});

module.exports = router;
