const mongoose = require("mongoose");
const MONGO_URL =
  process.env.MONG_URL ||
  "mongodb+srv://root:mernITI39@coderm-om0sg.gcp.mongodb.net/fixed?retryWrites=true";
mongoose.connect(
  MONGO_URL,
  {
    useCreateIndex: true,
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    useNewUrlParser: true
  },
  err => {
    if (!err) console.log("Mongo DB is connected ....");
    else console.log(err);
  }
);
