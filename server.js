const express = require("express");
const authRoutes = require("./routes/authRoutes");
const { errorHandler } = require("./middlewares/errorHandler");
const connectDB = require("./config/db");
const app = express();
require('dotenv').config();

app.use(express.json());

app.use("/api/auth",authRoutes);
app.use(errorHandler);

async function startServer() {
  try {
    await connectDB();
    console.log("MongoDB connected");
    console.log(process.env.SENDGRID_API_KEY, process.env.EMAIL_PASS);


    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  } catch (error) {
    console.error("Failed to connect to DB:", error);
    process.exit(1);
  }
}

startServer();