const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    default: 50,
  },
  popularity: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Post", postSchema);
