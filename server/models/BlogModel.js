const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      title: {
        type: String,
        required:true
      },
    },
    author: {
      name: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        required: true,
      },
    },
    image:{
      type:String,
      required:true
    }
  },
  { timestamps: true }
);

const Blogs = mongoose.model("blogsData", blogSchema);
module.exports = Blogs ;
