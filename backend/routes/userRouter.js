const express = require("express")
const router = express.Router()
const {login, register, updateProfile, updateUserRole, logout} = require("../controllers/userController")
const {validateUser,loginValidate, validateRoleAndUserId} = require("../middleware/ValidateInputData")
const {auth, isNotAdmin} = require("../middleware/auth")


router.post("/register",validateUser,register)
router.post("/login", loginValidate, login)
router.patch("/updateprofile", auth, updateProfile)
router.patch("/updaterole", auth, isNotAdmin, validateRoleAndUserId, updateUserRole)
router.get("/logout", logout)

module.exports = router;