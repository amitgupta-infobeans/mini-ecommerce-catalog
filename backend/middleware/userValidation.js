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
