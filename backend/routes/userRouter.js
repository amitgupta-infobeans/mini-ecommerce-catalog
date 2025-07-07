const express = require("express")
const router = express.Router()
const {login, register, updateProfile} = require("../controllers/userController")
const {validateUser,loginValidate} = require("../middleware/ValidateInputData")
const {auth} = require("../middleware/auth")


router.post("/register",validateUser,register)
router.post("/login", loginValidate, login)
router.patch("/updateprofile", auth, updateProfile)

module.exports = router;