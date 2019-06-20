require("./mongo-conf.js");
const express = require("express");
const postRouter = require("./routes/postRouter");
const cors = require("cors");
const app = express();
const PORT = 3010;

app.use(express.json());
app.use(cors());
app.use("/posts", postRouter);

app.listen(PORT, () => {
  console.log(`Server Started at port ${PORT}`);
});
