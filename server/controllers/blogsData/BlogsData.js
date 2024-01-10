const Blogs = require("../../models/BlogModel");

const postBlog = async (req, res) => {
  const { title, description, category, authorname } = req.body;
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ status: false, message: "No file uploaded" });
    }

    await Blogs.create({
      title: title,
      description: description,
      category: category,
      authorname: authorname,
      image: req.file.filename,
    });

    return res
      .status(200)
      .json({ status: true, message: "Blog created Successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ status: false, message: "An error occurred" });
  }
};

const getBlogs = async (req, res) => {
  try {
    const allBlogs = await Blogs.find();
    return res.status(200).json({ status: true, allBlogs });
  } catch (error) {
    return res.status(500).json({ status: false, message: "An error occured" });
  }
};

const updateSingleBlogById = async (req, res) => {
  const { id } = req.params;
  const { title, category, description, authorname,image } = req.body;

  try {
    const updatedBlog = await Blogs.findByIdAndUpdate(
      id,
      req.body,
      { new: true } // This option returns the modified document rather than the original
    );

    if (!updatedBlog) {
      return res.status(404).json({ status: false, message: "Blog not found" });
    }

    return res.status(200).json({ status: true, updatedBlog });
  } catch (error) {
    console.error("Error updating blog:", error);
    return res.status(500).json({ status: false, message: "An error occurred" });
  }
};

const getSingleBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    const getSingleBlog = await Blogs.findById(id);
    if (!getSingleBlog) {
      return res
        .status(401)
        .json({ status: false, message: "some error occured" });
    }
    return res.status(200).json({ status: true, getSingleBlog });
  } catch (error) {
    return res.status(500).json({ status: false, message: "An error occured" });
  }
};

const deleteSingleBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteSingleBlog = await Blogs.findByIdAndDelete({ _id: id });;
    if (!deleteSingleBlog) {
      return res
        .status(401)
        .json({ status: false, message: "some error occured" });
    }
    return res.status(200).json({ status: true ,message:"Blog Deleted Successfully"});
  } catch (error) {
    return res.status(500).json({ status: false, message: "An error occured" });
  }
};

const getBlogCategories = async (req, res) => {
  try {
    const blogCategories = await Blogs.find().distinct("category");
    
    if (!blogCategories || blogCategories.length === 0) {
      return res.status(404).json({ status: false, message: "No categories found" });
    }

    return res.status(200).json({ status: true, categories: blogCategories });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: false, message: "An error occurred" });
  }
};

module.exports = getBlogCategories;


module.exports = {
  postBlog,
  getBlogs,
  getSingleBlogById,
  updateSingleBlogById,
  deleteSingleBlogById,
  getBlogCategories
};
