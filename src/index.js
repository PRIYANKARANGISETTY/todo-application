import express from "express";
import todoRoutes from "./routes/todo.routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

// Routes
app.use("/todos", todoRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
