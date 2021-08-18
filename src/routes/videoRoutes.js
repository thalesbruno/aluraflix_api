const express = require("express");
const videoModel = require("../models/video");

const app = express();

app.get("/videos", async (req, res) => {
  try {
    const videos = await videoModel.find({});
    res.send(videos);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/videos/:id", async (req, res) => {
  try {
    const video = await videoModel.findById(req.params.id);
    if (!video) {
      res.status(404).send("Video not found.");
    } else {
      res.send(video);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/videos", async (req, res) => {
  const video = new videoModel(req.body);

  try {
    await video.save();
    res.send(video);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.patch("/videos/:id", async (req, res) => {
  try {
    const video = await videoModel.findByIdAndUpdate(req.params.id, req.body);
    await video.save();
    const video_updated = await videoModel.findById(req.params.id);
    res.send(video_updated);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/videos/:id", async (req, res) => {
  try {
    const video = await videoModel.findByIdAndDelete(req.params.id);
    if (!video) {
      res.status(404).send("Video not found.");
    } else {
      res.status(200).send(`Video ${req.params.id} deleted`);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = app;
