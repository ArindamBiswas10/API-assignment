const express = require("express");
const authRoutes = require("./routes/authRoutes");
const { errorHandler } = require("./middlewares/errorHandler");
const connectDB = require("./config/db");
const app = express();
app.use(errorHandler);


require('dotenv').config();

app.use(express.json());


app.use("/api/auth",authRoutes);


async function startServer() {
  try {
    await connectDB();
    console.log("MongoDB connected");
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  } catch (error) {
    console.error("Failed to connect to DB:", error);
    process.exit(1);
  }
}

startServer();