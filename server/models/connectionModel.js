const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const connectionUserData = mongoose.model("connectionData", userSchema);
module.exports = connectionUserData;
