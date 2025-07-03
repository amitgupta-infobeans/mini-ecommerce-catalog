const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  catName: {
    type: String,
    required: [true, "Category name is required."],
  },
  catImage: {
    type: String,
    required: [true, "Category image is required."],
  },
  catDesc: {
    type: String,
  },
  cloudinaryId: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const categoryModel = mongoose.model("category", categorySchema);

module.exports = { categoryModel };
