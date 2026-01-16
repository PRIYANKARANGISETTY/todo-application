import express from "express";
import {
  createTodo,
  fetchTodos,
  fetchTodo,
  editTodo,
  removeTodo,
} from "../controllers/todo.controller.js";

const router = express.Router();

router.post("/add", createTodo);
router.get("/", fetchTodos);
router.get("/:todoId", fetchTodo);
router.put("/update/:todoId", editTodo);
router.delete("/delete/:todoId", removeTodo);

export default router;
