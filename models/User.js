const mongoose = require("mongoose");
const bycrypt = require("bcrypt");

const saltrounds = 10
const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

userSchema.pre('save', function(next){
  this.password = bycrypt.hashSync(this.password, saltrounds)
  console.log(this.password);
  next();
})

const User = mongoose.model('User', userSchema)
module.exports = User;