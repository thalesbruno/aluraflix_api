const mongoose = require("mongoose");

const categoriaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  color: {
    type: String,
    required: [true, "Color is required"],
  },
});

const Categoria = mongoose.model("Categoria", categoriaSchema);

module.exports = Categoria;
