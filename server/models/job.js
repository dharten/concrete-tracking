const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const jobSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  jobId: {
    type: String,
    required: true
  },
  address: {
    street: String,
    city: String,
    state: String,
    zip: String
  },
  phone: String,
  checkedOut: Boolean,
  location: String,
  sampleId: Number,
  time: String,
  date: String
})

module.exports = mongoose.model("Job", jobSchema);
