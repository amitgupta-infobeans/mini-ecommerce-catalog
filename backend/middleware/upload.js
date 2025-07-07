const multer = require("multer");
const cloudinary = require("../config/cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "mini-ecommerce",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage, limits: { fileSize: 2*1024*1024 } });

module.exports = upload;
