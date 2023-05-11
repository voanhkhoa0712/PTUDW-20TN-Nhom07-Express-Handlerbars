const express = require("express");
const app = express();
const port = process.env.port || 3000;

app.use(express.static(__dirname + "/html"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/index.htm");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
