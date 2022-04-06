const express = require('express');
const router = express.Router();
const {createTodo , getTodos, updateTodo, deleteTodo, getTodoById, getTodosByUser } = require('../controller/todoController');

router.post('/create' , createTodo)
router.get('/getTodos', getTodos)
router.put('/updateTodo/:id', updateTodo)
router.delete('/deleteTodo/:id', deleteTodo)
router.get('/getTodoById/:id', getTodoById)
router.get('/getTodoByUser/:userId', getTodosByUser)

module.exports = router;
