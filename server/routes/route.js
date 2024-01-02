const express = require("express");
const { signup, login } = require("../controllers/auth/Auth");
const { contactUser } = require("../controllers/connectionData/ConnectionData");
const { postBlog, getBlogs } = require("../controllers/blogsData/BlogsData");
const router = express.Router();

router.post("/signup",signup)
router.post("/login",login)
router.post("/userData",contactUser)
router.post("/postBlog",postBlog)
router.get("/getBlogs",getBlogs)

module.exports = router;