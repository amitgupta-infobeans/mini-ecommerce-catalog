const { body } = require("express-validator");

exports.validateUser = [
  body("name").notEmpty().withMessage("Name is required field"),

  body("email")
    .notEmpty()
    .withMessage("Email is a required field")
    .isEmail()
    .withMessage("Enter a valid email"),

  body("password")
    .notEmpty()
    .withMessage("Password is a required field")
    .isLength({ min: 6 })
    .withMessage("Password should be atleast 6 character long."),
];

exports.loginValidate = [
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Enter valid email address."),
  body("password").notEmpty().withMessage("Password is required"),
];

// Product validation:
exports.validateProduct = [
  body("title").notEmpty().withMessage("Category name is  required."),
  body("description").notEmpty().withMessage("Description is required"),
  body("price")
    .notEmpty()
    .withMessage("price of product is required.")
    .isNumeric()
    .withMessage("price should be numeric value."),
  body("stockQty")
    .notEmpty()
    .withMessage("stock quantity is required.")
    .isNumeric()
    .withMessage("stock quantity should be numeric value."),
  body("productImage").custom((value, { req }) => {
    if (!req.file) {
      throw new Error("Product file is required field...");
    }
    return true;
  }),
];

// Validate Edit Product.
exports.validateEditProduct = [
  body("title").notEmpty().withMessage("Category name is  required."),
  body("description").notEmpty().withMessage("Description is required"),
  body("price")
    .notEmpty()
    .withMessage("price of product is required.")
    .isNumeric()
    .withMessage("price should be numeric value."),
  body("stockQty")
    .notEmpty()
    .withMessage("stock quantity is required.")
    .isNumeric(),
];

exports.validateRoleAndUserId = [
  body("userId").notEmpty().withMessage("userId is required"),
  body("role")
    .notEmpty()
    .withMessage("user role is required")
    .isIn(["admin", "user", "manager"])
    .withMessage("role must be either 'user' or 'admin'"),
];
