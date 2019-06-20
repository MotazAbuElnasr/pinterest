const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  amiiboSeries: String,
  character: String,
  gameSeries: String,
  image: String,
  name: String,
  release: {
    au: String,
    eu: String,
    jp: String,
    na: String
  }
});
postSchema.index({ name: "text", name: "text" });

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
