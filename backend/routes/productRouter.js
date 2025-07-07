const express = require("express");
const { auth, isNotAdmin } = require("../middleware/auth");
const {addProduct, updateProduct, deleteProduct, getProducts} = require("../controllers/productController");
const upload = require("../middleware/upload");
const { validateProduct, validateEditProduct } = require("../middleware/ValidateInputData");
const { returnResponse } = require("../utils/response");

const router = express.Router();

router.post("/", auth, isNotAdmin, (req,res,next)=>{

    upload.single("productImage")(req,res, (err)=>{
        if(err){
            return returnResponse(res, 400, "Error to upload file", {}, err.message)
        }
        next()
    })

}, validateProduct,   addProduct); // has image upload required.
router.get("/:id", getProducts); // get one product by id.
router.get("/", getProducts); // get all product
router.patch("/:id", auth, isNotAdmin, (req,res,next)=>{
    upload.single('productImage')(req,res, (err)=>{
        if(err){
            return returnResponse(res, 400, "Error to upload file", {}, err.message)
        }
        next();
    })
}, validateEditProduct, updateProduct); // has image upload optional.
router.delete("/:id", auth, isNotAdmin, deleteProduct);

module.exports = router;
