const jwt = require("jsonwebtoken");
const { returnResponse } = require("../utils/response");

const auth = async (req, res, next) => {
  try {
    let token = req.cookies.token
    if (!token)
      return res.status(401).json({ message: "Unauthorized. No token provided" });

    let decodeToken = await jwt.verify(token, process.env.JSONWEB_TOKEN);
    req.user = decodeToken;
    next();
  } catch (e) {
    returnResponse(res, 400, e.message);
  }
};


const isNotAdmin = (req,res, next) =>{
  try{
    const {role} = req.user
    if(role != "admin"){
      return returnResponse(res, 401, "Unauthorized user to perform this action.")
    }
    next()
  }catch(e){
    return returnResponse(res, 400, e.message)
  }
  
}

module.exports = { auth,isNotAdmin };
