const express = require("express");
const { signup, login } = require("../controllers/auth/Auth");
const { contactUser } = require("../controllers/connectionData/ConnectionData");
const router = express.Router();

router.post("/signup",signup)
router.post("/login",login)
router.post("/userData",contactUser)

module.exports = router;