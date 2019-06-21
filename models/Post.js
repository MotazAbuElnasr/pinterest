const mongoose = require("mongoose");
const mongoosastic = require("mongoosastic");

const postSchema = new mongoose.Schema({
  amiiboSeries: String,
  character: String,
  gameSeries: String,
  head: String,
  image: String,
  name: { type: String, es_indexed: true },
  release: {
    au: String,
    eu: String,
    jp: String,
    na: String
  },
  tail: String,
  type: String
});
postSchema.index({ name: "text", name: "text" });
postSchema.plugin(mongoosastic, {
  host: process.env.ELASTIC_HOST,
  port: process.env.ELASTIC_PORT,
  protocol: "https",
  auth: process.env.ELASTIC_AUTH
});
const Post = mongoose.model("Post", postSchema);

// ============= For Sync =============
// let stream = Post.synchronize();
// let count = 0;

// stream.on("data", function(err, doc) {
//   count++;
// });
// stream.on("close", function() {
//   console.log("indexed " + count + " documents!");
// });
// stream.on("error", function(err) {
//   console.log(err);
// });
// ============= For Sync =============

Post.createMapping(function(err, mapping) {
  if (err) {
    console.log("error creating mapping (you can safely ignore this)");
    console.log(err);
  } else {
    console.log("mapping created!");
    console.log(mapping);
  }
});
module.exports = Post;
