const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema({
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
  },
  url: {
    type: String,
    required: true
  },
  fullScreenPhoto: {
    type: String,
    required: true
  },
  codeLocation: {
    type: String,
    required: false
  },
  sitePreview: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model("Project", projectSchema);
