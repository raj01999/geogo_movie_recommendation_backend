const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
    unique: true,
  },
  watch_later: Array,
  liked: Array,
});

module.exports = mongoose.model("users", userSchema);
