const mongoose = require("mongoose");

const connectUrl = "mongodb://127.0.0.1:27017/video_con";

try {
  mongoose.connect(connectUrl);
  console.log("mongoose connected!");
} catch (err) {
  console.log(err);
}
