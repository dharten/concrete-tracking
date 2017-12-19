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
  checked: Boolean
})

module.exports = mongoose.model("Job", jobSchema);
