const express = require("express");
const mongoose = require("mongoose");
const videoRouter = require("./routes/videoRoutes");
const categoriaRouter = require("./routes/categoriaRoutes");

const app = express();

const db_name = process.env.DB_NAME;
const db_pass = process.env.DB_PASSWORD;
const db_user = process.env.DB_USER;

const db_uri = `mongodb+srv://${db_user}:${db_pass}@cluster0.gzwdw.mongodb.net/${db_name}?retryWrites=true&w=majority`;

app.use(express.json());

mongoose.connect(db_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.use(videoRouter);
app.use(categoriaRouter);

app.listen(process.env.PORT || 3000, () => console.log(`Server is running...`));
