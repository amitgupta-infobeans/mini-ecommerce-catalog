const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email should be unique"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters"],
  },
  phone: {
    type: Number,
  },
  city: {
    type: String,
  },
  zipCode: {
    type: Number,
  },
  country:{
    type:String,
  },
  address: {
    type: String,
  },
  role:{
    type:String,
    default:"user"
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
