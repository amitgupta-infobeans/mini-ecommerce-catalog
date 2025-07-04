const { returnResponse } = require("../utils/response");
const { categoryModel } = require("../models/categoryModel");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary");

//  Add category.
const addCategory = async (req, res) => {
  try {
    const { catName, catDesc } = req.body;

    const image = req.file;
    if (!image) return returnResponse(res, 400, "Please provide file to upload..");

    const imageUrl = image.path;
    const cloudinaryId = image.filename;

    // Save category in DB....
    const data = await categoryModel.create({
      catName,
      catImage: imageUrl,
      catDesc,
      cloudinaryId,
    });
    if (!data)
      return returnResponse(res, 400, "Something went wrong to add category");
    returnResponse(res, 201, "Category added", data);
  } catch (e) {
    returnResponse(res, 403, e.message);
  }
};

// Edit Category.
const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const categoryExist = await categoryModel.findById(id);
    if (!categoryExist)
      return returnResponse(res, 400, `No data found for category id = ${id}`);

    if (req.file) {
      if (categoryExist.cloudinaryId) {
        await cloudinary.uploader.destroy(categoryExist.cloudinaryId);
      }
      categoryExist.catImage = req.file.path;
      categoryExist.cloudinaryId = req.file.filename;
    }

    categoryExist.catName = req.body.catName || categoryExist.catName;
    categoryExist.catDesc = req.body.catDesc || categoryExist.catDesc;

    await categoryExist.save();
    return returnResponse(res, 200, "category updated.", categoryExist);
  } catch (e) {
    return returnResponse(res, 400, e.message);
  }
};

// Get all categories.
const getAllCategory = async (req, res) => {
  try {
    const categories = await categoryModel.find();
    if (!categories) return returnResponse(res, 400, "No data found.");
    return returnResponse(
      res,
      200,
      "Categories fetched successfully.",
      categories
    );
  } catch (e) {
    return returnResponse(res, 400, e.message);
  }
};

// Delete category by id.
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      return returnResponse(res, 400, "invalid category id.");
    let categoryExist = await categoryModel.findById(id);
    if (!categoryExist) return returnResponse(res, 400, "category not found.");

    if (categoryExist.cloudinaryId) {
      await cloudinary.uploader.destroy(categoryExist.cloudinaryId);
    }

    await categoryModel.findByIdAndDelete(id);
    return returnResponse(res, 200, "Category deleted.");
  } catch (e) {
    return returnResponse(res, 400, e.message);
  }
};

module.exports = {
  addCategory,
  getAllCategory,
  deleteCategory,
  updateCategory,
};
