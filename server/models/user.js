const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  id: { type: String },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});
const User = mongoose.model("User", userSchema);

module.exports = User;
