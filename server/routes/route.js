const express = require("express");
const { signup, login } = require("../controllers/auth/Auth");
const { contactUser } = require("../controllers/connectionData/ConnectionData");
const { postBlog, getBlogs } = require("../controllers/blogsData/BlogsData");
const multer = require("multer");
const router = express.Router();

const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,"uploads/")
  },
  filename:(req,file,cb)=>{
    cb(null,file.originalname + "-" + Date.now()+".png")
  }

})

const upload = multer({storage:storage, limits: { fileSize: 5 * 1024 * 1024 } })
router.post("/signup",upload.single("profileImage"),signup)
router.post("/login",login)
router.post("/userData",contactUser)
router.post("/postBlog",postBlog)
router.get("/getBlogs",getBlogs)

module.exports = router;