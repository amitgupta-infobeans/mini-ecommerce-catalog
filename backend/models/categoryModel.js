const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  catName: {
    type: String,
    unique:true,
    required: [true, "Category name is required."],
  },
  tag: {
    type: String,
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

categorySchema.pre("save", async function(next) {
  try {
    if (this.isModified("catName")) {
      this.tag = await this.catName.toLowerCase().split(" ").join("-");
    }
  } catch (e) {
    return next(e);
  }
  next();
});

const categoryModel = mongoose.model("category", categorySchema);

module.exports = { categoryModel };
