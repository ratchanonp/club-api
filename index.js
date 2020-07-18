const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");
const dotenv = require('dotenv');

// Import Route
const authRoute = require("./routes/auth");
const studentRoute = require("./routes/student");
const activityRoute = require("./routes/activity");

dotenv.config();

// MongoDB Connect
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected To DB")
);

// Middleware
app.use(express.json());

// Route Middlewares
app.use("/api/user", authRoute);
app.use("/api/activity", activityRoute);
app.use("/api/student", studentRoute);

app.listen(port, () => console.log(`Running http://localhost:${port}`));
