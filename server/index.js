const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.post("/", async (req, res) => {
  test = await req.body;
  console.log(test);
  res.send(test);
});
app.listen(process.env.port || 1234, () => console.log("Server listening..."));
