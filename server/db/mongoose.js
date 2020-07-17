const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/QuestionsRepo",
  { useNewUrlParser: true, useUnifiedTopology: true, authSource: "admin" }
);

mongoose.connection.on("open", function () {
  console.log("Connected to MongoDB");
});

module.exports = { mongoose };
