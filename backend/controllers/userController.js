const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { returnResponse, validateRequest } = require("../utils/response");
const ms = require("ms");
require("dotenv").config();

const expiresIn = process.env.JWT_AND_COOKIE_EXPIRES_IN;

// Register user.
const register = async (req, res) => {
  try {
    let error = validateRequest(req);
    if (error.length) {
      return returnResponse(res, 400, "validation failed", {}, error);
    }
    const { name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const screatedUser = await userModel.create({
      name,
      email,
      password: hashPassword,
    });
    const user = screatedUser.toObject(); // convert to plain object
    return returnResponse(res, 201, "User successfully register.");
  } catch (e) {
    return returnResponse(res, 400, {}, e.message);
  }
};

// Login user.
const login = async (req, res) => {
  try {
    let error = validateRequest(req);
    if (error.length) {
      return returnResponse(res, 400, "validation failed", {}, error);
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
      { user_id: userData._id, role: userData.role },
      process.env.JSONWEB_TOKEN,
      { expiresIn }
    );

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: ms(expiresIn), //convert 1h into miliseconds of 1h
    });
    return returnResponse(res, 200, "login success", userData);
  } catch (e) {
    return returnResponse(res, 400, e.message);
  }
};

// Update user profile.
const updateProfile = async (req, res) => {
  try {
    const { user_id, role } = req.user;
    const { name, phone, city, country, address, zipCode } = req.body;
    const updatedUser = await userModel.findByIdAndUpdate(
      user_id,
      { name, phone, city, country, address, zipCode },
      { new: true }
    );

    if (!updatedUser)
      return returnResponse(res, 400, "Something went wrong to update profile");

    return returnResponse(res, 200, "Profile Updated", updatedUser);
  } catch (e) {
    return returnResponse(res, 400, e.message);
  }
};

const updateUserRole = async (req, res) => {
  try {
    let error = validateRequest(req);
    const { role, userId } = req.body;
    if (error.length)
      return returnResponse(res, 400, "validation failed: ", {}, error);
    await userModel.findByIdAndUpdate(userId, { role });

    return returnResponse(res, 200, "user role Updated");
  } catch (e) {
    return returnResponse(res, 400, e.message);
  }
};

const logout = (req, res) => {
  res.clearCookie("token");
  return returnResponse(res, 200, "Logout Successfully.");
};

module.exports = { register, login, updateProfile, updateUserRole, logout };