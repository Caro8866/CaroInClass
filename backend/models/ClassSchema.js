import mongoose from "mongoose";

// teacherschema embedded document
const teacherSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

const ClassSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  teacher: teacher, // embedded document
  semester: { type: String, required: true },
  year: { type: Number, required: true },
  // students: { type: Array, required: true }, // not relevant right now
});

export const Class = mongoose.model("Class", ClassSchema);
