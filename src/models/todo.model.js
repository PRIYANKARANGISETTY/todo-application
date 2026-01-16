import path from "path";
import { readDB, writeDB } from "../utils/fileHandler.js";

const dbPath = path.join("src", "db.json");

export const getAllTodos = () => {
  const db = readDB(dbPath);
  return db.todos;
};

export const getTodoById = (id) => {
  const db = readDB(dbPath);
  return db.todos.find((todo) => todo.id === id);
};

export const addTodo = (title) => {
  const db = readDB(dbPath);
  const newTodo = { id: Date.now(), title };

  db.todos.push(newTodo);
  writeDB(dbPath, db);

  return newTodo;
};

export const updateTodo = (id, data) => {
  const db = readDB(dbPath);
  const index = db.todos.findIndex((todo) => todo.id === id);

  if (index === -1) return null;

  db.todos[index] = { ...db.todos[index], ...data };
  writeDB(dbPath, db);

  return db.todos[index];
};

export const deleteTodo = (id) => {
  const db = readDB(dbPath);
  const index = db.todos.findIndex((todo) => todo.id === id);

  if (index === -1) return null;

  const deleted = db.todos.splice(index, 1);
  writeDB(dbPath, db);

  return deleted[0];
};
