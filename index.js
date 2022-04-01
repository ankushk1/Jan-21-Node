const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const db = require("./config/mongoose")
const userRoutes = require('./routes/userRoutes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', userRoutes)


app.listen(8000, function () {
  console.log(`server running on port 8000`);
});
