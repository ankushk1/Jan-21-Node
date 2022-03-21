const express = require("express");
var bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const todoArr = [
//   { id: 1, name: "Todo 1" },
//   { id: 2, name: "Todo 2" }
// ];

// app.get("/hello", (req, res) => {
//   res.send("Hey app running ");
// });

// app.get("/", (req, res) => {
//   res.json({ todos: todoArr, message: "All todos fetched" });
// });

// app.post("/addTodo", (req, res) => {
//   console.log(req.query)
//   const todo = req.body;
//   todoArr.push(todo);
//   res.json({ message: "Todo added" });
// });

// app.put("/updateTodo", (req, res) => {
//   const id = req.body.id;
//   const index = todoArr.findIndex((x) => x.id == id);
//   todoArr[index] = req.body;
//   res.json({ todos: todoArr, message: "Todo updated" });
// });

// app.delete("/deleteTodo", (req, res) => {
//   const id = req.body.id;
//   const index = todoArr.findIndex((x) => x.id == id);
//   todoArr.splice(index, 1);
//   res.json({ todos: todoArr, message: "Todo Deleted" });
// });

app.listen(8000, function () {
  console.log(`server running on port 8000`);
});
