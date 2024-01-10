// middleware/multerConfig.js
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const userImage = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } });
const blogImage = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } });

module.exports = {
  userImage,
  blogImage,
};
