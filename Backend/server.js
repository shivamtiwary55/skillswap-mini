const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const User = require("./models/User");

const app = express();

const PORT = 5000;

// middleware
app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected 😎");
  })
  .catch((error) => {
    console.log(error);
  });

// test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// register route
app.post("/api/register", async (req, res) => {
  try {
    const user = new User(req.body);

    await user.save();

    res.json({
      message:
        "User registered successfully 😎",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

// Get all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error fetching users",
    });
  }
});

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});