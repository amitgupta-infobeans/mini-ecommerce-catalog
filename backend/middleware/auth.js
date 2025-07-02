const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    let token = req?.headers?.authorization;
    if (!token)
      return res.status(401).json({ message: "No token provided" });

    let decodeToken = await jwt.verify(token, process.env.JSONWEB_TOKEN);
    req.user = decodeToken;
    next();
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

module.exports = { auth };
