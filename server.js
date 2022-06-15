const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

require("dotenv").config({ path: "./config.env" });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',(req, res) => {
  res.send("hi");
});


app.use(require("./routes/user"));
app.use(require("./routes/game"));
app.use(require("./routes/comment"));
app.use(require("./routes/like"));

const ATLAS_URI = "mongodb+srv://bsun1220:jrabbit11@brain-train.7lspn.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(ATLAS_URI,{
  useNewUrlParser: true,
  useUnifiedTopology:true
});


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Mongoose Connected Successfully");
});



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);});

