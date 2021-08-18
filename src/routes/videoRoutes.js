const express = require("express");
const videoModel = require("../models/video");

const app = express();

app.get("/videos", async (req, res) => {
  const videos = await videoModel.find({});

  try {
    res.send(videos);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = app;
