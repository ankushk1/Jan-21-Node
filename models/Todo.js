const mongoose = require("mongoose");


const todoSchema = new mongoose.Schema({
  text: {
    type:String,
    required: true
  },
  date: {
    type:String,
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
},
{timestamps: true}
)


const Todo = mongoose.model('Todo', todoSchema)
module.exports = Todo 