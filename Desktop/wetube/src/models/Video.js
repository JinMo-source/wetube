import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  createDate: { type: Date, default: Date.now },
});

const Video = mongoose.model("Videos", videoSchema);

export default Video;
