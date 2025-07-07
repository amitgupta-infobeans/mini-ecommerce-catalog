const { validationResult } = require("express-validator");

const returnResponse = (res, status, message, data = {}, error = "") => {
  return res.status(status).json({ message, data, error });
};

// Validate input request.
const validateRequest = (req) => {
  const error = validationResult(req);
  return error.array();
};

module.exports = { returnResponse,validateRequest };

