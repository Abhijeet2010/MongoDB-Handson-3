const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const projectmodel = mongoose.model("information", projectSchema);

module.exports = { projectmodel };
