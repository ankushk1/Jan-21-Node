const User = require("../models/User");
const bycrypt = require("bcrypt");

exports.signup = async (req, res) => {
  try {
    let user = await User.findOne({
      email: req.body.email
    });
    if (user) {
      return res.status(400).json({ message: "User exists" });
    }
    const userCreated = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password
    });
    if (!userCreated) {
      return res.status(400).json({ message: "User creation failed" });
    }
    res.status(200).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.signin = async (req, res) => {
  try {
    let user = await User.findOne({
      email: req.body.email
    });
    if (!user || !bycrypt.compareSync(req.body.password, user.password)) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
    const {_id, email} = user
    res.status(200).json({user:{_id, email},  message: "Login Successful" });
    
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}