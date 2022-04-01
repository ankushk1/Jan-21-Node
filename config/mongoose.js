const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/rest", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection

db.on('error', (err) => {
  console.log('Error connecting to Db', err.message);
})

db.once('open', () => {
  console.log('Successfully connected to DB')
})

