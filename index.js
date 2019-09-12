require("./mongo-conf.js");
const express = require("express");
const postRouter = require("./routes/postRouter");
const cors = require("cors");
const path = require("path");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8000;
app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());
app.use(cors());
app.use("/posts", postRouter);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "index.html"));
  });
}
app.listen(PORT, () => {
  console.log(`Server Started at port ${PORT}`);
});
