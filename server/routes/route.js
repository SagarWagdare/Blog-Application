const express = require("express");
const { signup, login, getUser } = require("../controllers/auth/Auth");
const { contactUser } = require("../controllers/connectionData/ConnectionData");
const { postBlog, getBlogs } = require("../controllers/blogsData/BlogsData");
const multer = require("multer");
const router = express.Router();
router.use(express.static('uploads'))
const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,"uploads/")
  },
  filename:(req,file,cb)=>{
    cb(null,`${Date.now()}-${file.originalname}`)
  }

})

const upload = multer({storage:storage, limits: { fileSize: 5 * 1024 * 1024 } })
router.post("/signup",upload.single("image"),signup)
router.post("/login",login)
router.get("/getUser",getUser)
router.post("/userData",contactUser)
router.post("/postBlog",upload.single("image"),postBlog)
router.get("/getBlogs",getBlogs)

module.exports = router;