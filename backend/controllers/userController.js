const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

// Register user.
const register = async (req, res) => {
  try {
    let error = validateRequest(req);
    if (error.length) {
      return res
        .status(403)
        .json({ message: "validation failed", error: error });
    }
    const { name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const screatedUser = await userModel.create({
      name,
      email,
      password: hashPassword,
    });
    const user = screatedUser.toObject(); // convert to plain object
    return res.status(201).json({ message: "User successfully register." });
  } catch (e) {
    catchResponst(e, res);
  }
};

// Login user.
const login = async (req, res) => {
  try {
    let error = validateRequest(req);
    if (error.length) {
      return res.status(403).json({ message: "validation failed", error });
    }
    const { email, password } = req.body;
    const user = await userModel.findOne({ email: email });
    if (!user) return res.status(400).json({ message: "Invalid Email" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid Password" });
    let userData = user.toObject();
    delete userData.password;
    // add token in response..
    let token = jwt.sign(
      { id: userData._id, role: userData.role },
      process.env.JSONWEB_TOKEN,
      { expiresIn: `${process.env.JWT_EXPIRES_IN}` }
    );
    userData.token = token;
    res.status(200).json({ message: "login success", user: userData });
  } catch (e) {
    catchResponst(e, res);
  }
};

// Update user profile.
const updateProfile = async (req, res) => {
  try {
    const { id, role } = req.user;
    const { name, phone, city, country, address, zipCode } = req.body;
    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      { name, phone, city, country, address, zipCode },
      { new: true }
    );

    if (!updatedUser)
      return res
        .status(400)
        .json({ message: "Something went wrong to update profile" });

    return res
      .status(200)
      .json({ message: "Profile Updated.", user: updatedUser });
  } catch (e) {
    catchResponst(e, res);
  }
};

// Validate input request.
const validateRequest = (req) => {
  const error = validationResult(req);
  return error.array();
};

// catch error return response.
const catchResponst = (err, res) => {
  return res.status(403).json({ message: err.message });
};
module.exports = { register, login, updateProfile };
