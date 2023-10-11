import mongoose from "mongoose";

// teacherschema embedded document
const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

const ClassSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  teacher: [teacherSchema],
  semester: { type: String, required: true },
  year: { type: Number, required: true },
});

module.exports = mongoose.model("Class", ClassSchema);
