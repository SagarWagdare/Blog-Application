const User = require("../../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const authUser = await User.create({
      username: username,
      email: email,
      password: hashPassword,
    });

    const token = jwt.sign(
      {
        userId: authUser._id,
        email: authUser.email,
        username: authUser.username,
        age: authUser.age,
      },
      process.env.SECRET_KEY,
      { expiresIn: "24h" }
    );

    await authUser.save();
    return res
      .status(200)
      .json({ succees: true, message: "Signup Successfull", token });
  } catch (error) {
    return res.status(404).json({ succees: false, message: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email: email });
    if (!existingUser) {
      return res
        .status(404)
        .json({ succees: false, message: "User not found" });
    }
    const hashPassword = await bcrypt.compare(password, existingUser.password);
    if (!hashPassword) {
      return res
        .status(401)
        .json({ succees: false, message: "Invalid Password" });
    }
    const token = jwt.sign(
      {
        userId: existingUser._id,
        email: existingUser.email,
        username: existingUser.username,
        age: existingUser.age,
      },
      process.env.SECRET_KEY,
      { expiresIn: "24h" }
    );

    return res
      .status(200)
      .json({ succees: true, message: "Login Successfull", token });
  } catch (error) {
    return res.status(500).json({ succees: false, message: error.message });
  }
};

module.exports = { login, signup };
