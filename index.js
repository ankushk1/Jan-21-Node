const express = require("express");
var bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(8000, function () {
  console.log(`server running on port 8000`);
});
