const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");
const videoRouter = require("./routes/videoRoutes");
const categoriaRouter = require("./routes/categoriaRoutes");

const app = express();
const server = config.server.host;
const port = config.server.port;

const db_name = config.database.host;
const db_pass = config.database.password;
const db_user = config.database.user;

const db_uri = `mongodb+srv://${db_user}:${db_pass}@cluster0.gzwdw.mongodb.net/${db_name}?retryWrites=true&w=majority`;

app.use(express.json());

mongoose.connect(db_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.use(videoRouter);
app.use(categoriaRouter);

app.listen(port, () =>
  console.log(`Server is running and listening at http://localhost:${port}`)
);
