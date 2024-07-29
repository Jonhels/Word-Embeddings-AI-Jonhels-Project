require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const connectDB = require("./config/dbConnect");

// Parse incoming requests to json
app.use(bodyParser.json());

// Connect database and start the server
connectDB().then(() => {
  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

// Cors
const whitelist = ["http://127.0.0.1:3000/", process.env.FRONTEND_ORIGIN];

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

// Routes
app.get("/", (req, res) => {
  res.send(
    "<h1>Welcome to the express server for this service</h1><br><p>Api endpoints can be found in the readmefile attached to this container</p>",
  );
});

app.use("/api", require("./routes/ollamaRoutes"));

// Catch all handler for undefined routes
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// Graceful shutdown
process.on("SIGINT", async () => {
  console.log("Shutting down gracefully...");
  await mongoose.connection.close();
  console.log("MongoDB connection closed.");
  process.exit(0);
});

module.exports = connectDB;
