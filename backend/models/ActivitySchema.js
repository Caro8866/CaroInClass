import mongoose from "mongoose";

const ActivitySchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  status: { type: String, required: true },
  dueDate: { type: Date, required: true },
  class: { type: mongoose.Schema.Types.ObjectId, ref: "Class", required: true },
});

module.exports = mongoose.model("Activity", ActivitySchema);
