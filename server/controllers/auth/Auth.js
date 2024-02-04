const User = require("../../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose")

const signup = async (req, res) => {
  const { username, email, password ,age,about} = req.body;
  try {
    // const image = req.file ? req.file.filename : undefined;
    const hashPassword = await bcrypt.hash(password, 10);
    const authUser = await User.create({
      username: username,
      email: email,
      password: hashPassword,
      image:req.file.filename,
      age:age,
      about:about
    });

    const token = jwt.sign(
      {
        userId: authUser._id,
        email: authUser.email,
        username: authUser.username,
        age: authUser.age,
        image:authUser.image
      },
      process.env.SECRET_KEY,
      { expiresIn: "24h" }
    );

    await authUser.save();
    return res
      .status(200)
      .json({ succees: true, message: "Signup Successfull",token ,userId:authUser._id});
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
        image:existingUser.image
      },
      process.env.SECRET_KEY,
      { expiresIn: "24h" }
    );

    return res
      .status(200)
      .json({ succees: true, message: "Login Successfull", token,userId:existingUser._id });
  } catch (error) {
    return res.status(500).json({ succees: false, message: error.message });
  }
};
const getUser = async (req, res) => {
  const { id } = req.query; // Use req.query to get id from query parameters

  // Validate ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid user ID" });
  }

  try {
    const existingUser = await User.findById(id);

    if (!existingUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const getUser = {
      username: existingUser.username,
      email: existingUser.email,
      age: existingUser.age,
      image: existingUser.image,
      userId: existingUser._id,
      about:existingUser.about
    };

    return res.status(200).json({ success: true, getUser });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { login, signup,getUser };
