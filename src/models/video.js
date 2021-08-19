const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  url: {
    type: String,
    required: [true, "URL is required"],
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categoria",
  },
});

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
