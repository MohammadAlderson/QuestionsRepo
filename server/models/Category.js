const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
  name: {
    type: String,
    require,
    trim: true,
    unique: true,
  },
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = { Category };
