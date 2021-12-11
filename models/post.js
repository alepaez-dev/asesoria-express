// Schemas for posts
const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title : {
    type: String,
    required: true
  },
  author : {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    required: false
  }
})

module.exports = mongoose.model("Post", postSchema)