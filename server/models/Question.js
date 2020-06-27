const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema({
  questionText: {
    type: String,
    trim: true,
    minLength: 10,
    require,
  },
  answers: {
    type: Array,
    require,
  },
  createdDate: {
    type: Number,
    require,
  },
  userId: {
    type: String,
    require,
  },
  categoryId: {
    type: String,
    require,
  },
});

const Question = mongoose.model("Question", QuestionSchema);

module.exports = { Question };
