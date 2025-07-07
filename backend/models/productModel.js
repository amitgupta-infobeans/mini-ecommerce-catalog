const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "Product title is required."]
    },
    description:{
        type:String,
        required:[true, "Product description is required."]
    },
    price:{
        type:Number,
        required:[true, "Product price is required."],
    },
    stockQty:{
        type:Number,
        required:[true, "Stock quantity is required"]
    },
    inStock:{
        type:Boolean,
        default:true,
        required:[true, "Product in stock field is required."]
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category",
        required:[true, "Product category is required."]
    },
    productImage:{
        type:String,
        required:[true, "Product image is required"]
    },
    rating:{
        type:Number,
        default: 0,
        min:0,
        max:5
    },
    cloudinaryId:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const productModel = mongoose.model("product", productSchema)


module.exports = productModel