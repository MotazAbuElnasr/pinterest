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

// data = {
//   amiiboSeries: "Super Mario Bros.",
//   character: "Mario",
//   gameSeries: "Super Mario",
//   head: "00000000",
//   image:
//     "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00340102.png",
//   name: "Mario",
//   release: {
//     au: "2015-03-21",
//     eu: "2015-03-20",
//     jp: "2015-03-12",
//     na: "2015-03-20"
//   },
//   tail: "00340102",
//   type: "Figure"
// };
