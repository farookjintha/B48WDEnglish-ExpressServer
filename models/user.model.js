const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  mobileNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  bloodGroup: {
    type: String,
    trim: true,
  },

  profession: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("Users", userSchema);
