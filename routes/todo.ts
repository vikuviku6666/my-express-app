import express from "express";
import { addTodo } from '../data.js';

const router = express.Router();

router.post('/todos', (req, res) => {
  console.log(req.body);
  
  const text = req.body.text;

  const addedTodo = addTodo(text);

  res.json({ message: 'Todo added!', todo: addedTodo });
});

export default router;