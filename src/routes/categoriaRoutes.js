const express = require("express");
const categoriaModel = require("../models/categoria");
const videoModel = require("../models/video");

const app = express();

app.get("/categorias/", async (req, res) => {
  try {
    const categorias = await categoriaModel.find({});
    res.send(categorias);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/categorias/:id/", async (req, res) => {
  try {
    const categoria = await categoriaModel.findById(req.params.id);
    if (!categoria) {
      res.status(404).send("Category not found");
    } else {
      res.send(categoria);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/categorias/", async (req, res) => {
  const categoria = new categoriaModel(req.body);

  try {
    await categoria.save();
    res.send(categoria);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.patch("/categorias/:id/", async (req, res) => {
  try {
    const categoria = await categoriaModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    await categoria.save();
    const categoria_updated = await categoriaModel.findById(req.params.id);
    res.send(categoria_updated);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/categorias/:id/", async (req, res) => {
  try {
    const categoria = await categoriaModel.findByIdAndDelete(req.params.id);
    if (!categoria) {
      res.status(404).send("Category not found.");
    } else {
      res.status(200).send(`Category ${req.params.id} deleted`);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/categorias/:id/videos/", async (req, res) => {
  try {
    const videos = await videoModel.find({ category: req.params.id }).exec();
    if (!videos) {
      res.status(404).send("videos not found");
    } else {
      res.send(videos);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = app;
