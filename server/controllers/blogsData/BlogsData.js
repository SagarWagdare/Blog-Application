const Blogs = require("../../models/BlogModel");
const postBlog = async (req, res) => {
  const { title, description, category, author } = req.body;
  try {
    await Blogs.create({
      title: title,
      description: description,
      category: {
        title: category.title,
      },
      author: {
        name: author.name,
        role: author.role,
      },
      blogImage:req.file.filename
    });
    return res
      .status(200)
      .json({ status: true, message: "Blog created Successfully" });
  } catch (error) {
    return res.status(500).json({ status: false, message: "An error occured" });
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

module.exports = { postBlog, getBlogs };
