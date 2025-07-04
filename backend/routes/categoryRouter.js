const express = require("express");
const { addCategory,getAllCategory,deleteCategory,updateCategory } = require("../controllers/categoryController");
const router = express.Router();
const upload = require("../middleware/upload");
const { returnResponse } = require("../utils/response");
const {auth, isNotAdmin} = require("../middleware/auth")


router.post("/", auth, isNotAdmin, (req, res, next) => {
    upload.single("catImage")(req, res, function (err) {
      if (err) {
        return returnResponse(res, 400, "Error to upload file: ", {}, err.message);
      }
      next();
    });
  },
  addCategory
);

router.get("/", getAllCategory)

router.delete("/:id", auth, isNotAdmin, deleteCategory)

router.patch("/:id", auth, isNotAdmin, (req,res, next)=>{
    upload.single("catImage")(req,res,function(err){
        if(err){
            return returnResponse(res,400, err.message)
        }
        next();
    })

}, updateCategory)

module.exports = router;
