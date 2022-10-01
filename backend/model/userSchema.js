const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  imgPath: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
});

// create Model

const user = new mongoose.model("users", userSchema);

module.exports = user;
