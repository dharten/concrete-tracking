const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

const port = process.env.PORT || 5150

app.use(bodyParser.json());
app.use(morgan("dev"));

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/concrete-testing",
  {useMongoClient: true},
  err => {
    if (err) throw err;
    console.log("Connected to the server");
  }
);

app.use("/concrete", require("./routes/jobRoutes"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
