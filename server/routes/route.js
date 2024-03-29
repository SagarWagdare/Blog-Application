const express = require("express");
const { signup, login, getUser } = require("../controllers/auth/Auth");
const { contactUser } = require("../controllers/connectionData/ConnectionData");
const { postBlog, getBlogs, getSingleBlogById, updateSingleBlogById, deleteSingleBlogById, getBlogCategories } = require("../controllers/blogsData/BlogsData");
const multer = require("multer");
const { userImage, blogImage } = require("../middlewares/multerConfig");
const router = express.Router();

// Serve static files from the 'uploads' directory
router.use(express.static('uploads'));

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   }
// });

// const userImage = multer({ storage: storage, limits: { fileSize: 5 * 1024 * 1024 } });
// const blogImage = multer({ storage: storage, limits: { fileSize: 5 * 1024 * 1024 } });

router.post("/signup", userImage.single("image"), signup);
router.post("/login", login);
router.get("/getUser", getUser);
router.post("/userData", contactUser);
router.post("/postBlog", blogImage.single("image"), postBlog);
router.get("/getBlogs", getBlogs);
router.patch("/updateblog/:id", updateSingleBlogById);
router.delete("/deleteBlog/:id", deleteSingleBlogById);
router.get("/getSingleBlog/:id", getSingleBlogById);
router.get("/getBlogCategories", getBlogCategories);

module.exports = router;
