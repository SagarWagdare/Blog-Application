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
    
        type: String,
        required:true
    },
    authorname: {
    
        type: String,
        required: true,     
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
