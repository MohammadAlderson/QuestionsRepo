const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  userName: {
    minlength: 3,
    type: String,
    require,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    require,
    trim: true,
  },
  displayName: {
    type: String,
    minlength: 1,
    trim: true,
    default: "User",
  },
  createdDate: {
    type: Number,
    require,
  },
  email: {
    type: String,
    trim: true,
    default: "ex@mple.com",
  },
  picture: {
    type: String,
    trim: true,
  },
  ansCount: {
    type: Number,
    default: 0,
  },
  correctAnsCount: {
    type: Number,
  },
  wrongAnsCount: {
    type: Number,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = { User };
