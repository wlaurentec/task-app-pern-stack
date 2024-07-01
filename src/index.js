const express = require("express");
const morgan = require("morgan");

const tasksRoutes = require("./routes/tasks.routes");

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(tasksRoutes);

app.listen(3000);
console.log("Server running on port 3000");
