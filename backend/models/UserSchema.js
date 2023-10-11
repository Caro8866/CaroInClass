import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: ture },
  password: { type: String, required: true },
  // isAdmin: { type: Boolean, required: true, default: false }, Not relevant right now
});

UserSchema.pre("save", async (next) => {
  // Hash password before saving
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10); // salt is a random string that is added to the password before hashing
  this.password = await bcrypt.hash(this.password, salt);
});

export const User = mongoose.model("User", UserSchema);
