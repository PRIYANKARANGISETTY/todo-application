import {
  getAllTodos,
  getTodoById,
  addTodo,
  updateTodo,
  deleteTodo,
} from "../models/todo.model.js";

export const createTodo = (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const todo = addTodo(title);
    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const fetchTodos = (req, res) => {
  try {
    res.status(200).json(getAllTodos());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const fetchTodo = (req, res) => {
  try {
    const todo = getTodoById(Number(req.params.todoId));

    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const editTodo = (req, res) => {
  try {
    const updated = updateTodo(Number(req.params.todoId), req.body);

    if (!updated) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const removeTodo = (req, res) => {
  try {
    const deleted = deleteTodo(Number(req.params.todoId));

    if (!deleted) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json(deleted);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
