const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Titulo is required"],
  },
  description: {
    type: String,
    required: [true, "Descricao is required"],
  },
  url: {
    type: String,
    required: [true, "URL is required"],
  },
});

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
