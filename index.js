require("./mongo-conf.js");
const express = require("express");
const postRouter = require("./routes/postRouter");
const cors = require("cors");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use("/posts", postRouter);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(PORT, () => {
  console.log(`Server Started at port ${PORT}`);
});
