const User = require("../models/User");
const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
  try {
    const todo = await Todo.create({
      text: req.body.text,
      date: req.body.date,
      createdBy: req.body.createdBy
    });
    if (!todo) {
      return res.status(400).json({ message: "Error creating todo" });
    }
    const { _id, text, date } = todo;
    return res
      .status(200)
      .json({ message: "todo created", todo: { _id, text, date } });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    if (!todos) {
      return res.status(400).json({ message: "Error in getting todos" });
    }
    return res.status(200).json({ todos: todos });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    let todoId = req.params.id;
    const updatedTodo = await Todo.findByIdAndUpdate(todoId, {
      text: req.body.text
    });
    if (!updatedTodo) {
      return res.status(400).json({ message: "Error updating Todo" });
    }
    const { _id } = updatedTodo;
    return res.status(200).json({ message: `Updated Todo having id ${_id}` });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    let todoId = req.params.id;
    const deletedTodo = await Todo.findByIdAndDelete(todoId);
    if (!deletedTodo) {
      return res.status(400).json({ message: "Error deleting Todo" });
    }
    const { _id } = deletedTodo;
    return res.status(200).json({ message: `Deleted Todo having id ${_id}` });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    let todoId = req.params.id;
    const todo = await Todo.findById(todoId);
    if (!todo) {
      return res.status(400).json({ message: "Error getting todo" });
    }
    return res
      .status(200)
      .json({ todo: todo, message: "Todo successfully fetched" });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

exports.getTodosByUser = async (req, res) => {
  try {
    let userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const todos = await Todo.find({ createdBy: userId });
    if (!todos) {
      return res.status(400).json({ message: "Error getting todos by user" });
    }
    if (todos.length === 0) {
      return res.status(200).json({ message: "No todos created by user" });
    }
    return res
      .status(200)
      .json({ todos: todos, message: "Todos successfully fetched" });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
