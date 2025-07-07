const { returnResponse, validateRequest } = require("../utils/response");
const productModel = require("../models/productModel");
const mongoose = require("mongoose");
const cloudinary  = require("../config/cloudinary");


const addProduct = async (req, res) => {
  try {
    const { title, description, price, category, stockQty } = req.body;
    const categoryId = req.body.category?.trim();
    if (!mongoose.Types.ObjectId.isValid(categoryId)) {
      return returnResponse(res, 400, "Invalid category id format");
    }

    let isError = validateRequest(req);
    if (isError.length)
      return returnResponse(res, 400, "validation failed..", {}, isError);

    if (!req.file) {
      return returnResponse(res, 400, "product image is required field");
    }

    let imageUrl = req.file.path;
    let cloudinaryId = req.file.filename;
    const product = await productModel.create({
      title,
      description,
      price,
      category,
      stockQty,
      productImage: imageUrl,
      cloudinaryId,
    });

    return returnResponse(res, 200, "Okay", product);
  } catch (e) {
    return returnResponse(res, 400, e.message);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, stockQty, price, category } = req.body;
    let error = validateRequest(req);
    if (error.length)
      return returnResponse(res, 400, "validation error:", {}, error);

    if (
      !mongoose.Types.ObjectId.isValid(id) ||
      !mongoose.Types.ObjectId.isValid(category)
    ) {
      return returnResponse(res, 400, "product or image id is not valid!");
    }
    const existProduct = await productModel.findById(id);

    if (req.file) {
      if (existProduct.cloudinaryId) {
        await cloudinary.uploader.destroy(existProduct.cloudinaryId);
      }
      existProduct.productImage = req.file.path;
      existProduct.cloudinaryId = req.file.filename;
    }
    existProduct.title = title;
    existProduct.description = description;
    existProduct.stockQty = stockQty;
    existProduct.category = category;
    existProduct.price = price;

    await existProduct.save();
    return returnResponse(res, 200, "updated successfully", existProduct);

  } catch (e) {
    return returnResponse(res, 400, e.message);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(req.params))
      return returnResponse(res, 400, "invalid product id format.");
    let deleteProduct = await productModel.findByIdAndDelete(id);
    if (!deleteProduct)
      return returnResponse(
        res,
        400,
        "Something went wrong to delete product.."
      );
    return returnResponse(res, 200, "Product deleted.");
  } catch (e) {
    return returnResponse(res, 400, e.message);
  }
};

const getProducts = async (req, res) => {
  try {
    const { id } = req.params;
    let products = [];
    if (id) {
      product = await productModel.findById(id);
      if (product) {
        products = [product];
      }
    } else {
      products = await productModel.find();
    }
    return returnResponse(res, 200, "Okay", products);
  } catch (e) {
    return returnResponse(res, 400, e.message);
  }
};

module.exports = { addProduct, updateProduct, getProducts, deleteProduct };
