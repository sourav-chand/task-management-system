const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./src/DB/db.js");
const taskRoutes = require("./src/routes/taskRoute.js");

dotenv.config();
connectDB();

const app = express();
app.use(express.json()); // Middleware to parse JSON
app.use("/api/tasks", taskRoutes); // Task Routes

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
