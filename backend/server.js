const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URI;
const db = process.env.DB_NAME;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const options = {
  origin: ["http://localhost:5500"],
  optionsSuccessStatus: 200,
  methods: ["GET, POST, PUT, DELETE"],
  allowedHeaders: "Content-Type, Authorization, X-Requested-With, content-type",
};

// API Routes

// MongoDB Connection
mongoose
  .connect(`${uri}/${db}`)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

// Server Start
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
