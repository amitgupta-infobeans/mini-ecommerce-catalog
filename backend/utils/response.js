const returnResponse = (res, status, message, data = {}, error = "") => {
  return res.status(status).json({ message, data, error });
};

module.exports = { returnResponse };
