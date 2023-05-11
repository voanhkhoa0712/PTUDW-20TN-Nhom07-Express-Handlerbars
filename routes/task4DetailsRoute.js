const express = require("express");
const router = express.Router();
const zodiacs = require("../data").zodiacs;

router.get("/", (req, res) => {
  const zodiac = req.params.zodiac;
  const defaultZodiac = zodiacs[0];
  const selectedZodiac = zodiacs.filter((item) => item.name == zodiac);
  const zodiacToRender =
    selectedZodiac.length > 0 ? selectedZodiac[0] : defaultZodiac;
  res.render("task4-details", { zodiacToRender });
});

// router.get("/:zodiac", (req, res) => {
//   let zodiac = req.params.zodiac;
//   let selectedZodiac = zodiacs.filter((item) => item.name == zodiac);
//   let zodiacProp = selectedZodiac.length > 0 ? selectedZodiac[0] : {};

//   res.render("task4-details", { zodiacProp });
// });

module.exports = router;
