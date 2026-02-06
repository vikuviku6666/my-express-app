import express from "express";
import { addTodo } from '../data.js';

const router = express.Router();

router.post('/post', (req, res) => {
  const text = req.body.text;

  const addedTodo = addTodo(text);

  res.json({ message: 'Todo added!', todo: addedTodo });
});

export default router;