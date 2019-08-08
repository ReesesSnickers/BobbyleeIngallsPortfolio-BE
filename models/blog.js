const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  photo: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("Blog", blogSchema);
