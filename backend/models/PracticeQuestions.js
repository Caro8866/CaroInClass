import mongoose from "mongoose";

const PracticeQuestionsSchema = new mongoose.Schema({
  question: { type: String, required: true, unique: true },
  answer: { type: String, required: true },
  type: { type: String, required: true }, // multiple choice, true/false, fill in the blank, code, etc...
  classID: { type: mongoose.Schema.Types.ObjectId, ref: "Class", required: true },
});

module.exports = mongoose.model("PracticeQuestions", PracticeQuestionsSchema);
