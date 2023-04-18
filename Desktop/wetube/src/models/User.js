import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  userName: { type: String, required: true, trim: true },
  password: { type: String },
  name: { type: String, required: true },
  location: String,
});

const User = mongoose.model("Users", userSchema);

export default User;
