const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const userModel = require("./models/userModel");

require("dotenv").config({ path: "./config.env" });

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(require("./routes/user"));
app.use(require("./routes/game"));
app.use(require("./routes/comment"));
app.use(require("./routes/like"));

mongoose.connect(process.env.ATLAS_URI,{
  useNewUrlParser: true,
  useUnifiedTopology:true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Mongoose Connected Successfully");
});

const dbo = require("./db/conn");

app.listen(port, () => {
    // perform a database connection when server starts
    dbo.connectToServer(function (err) {
      if (err) console.error(err);
    });
    console.log(`Server is running on port: ${port}`);
  });