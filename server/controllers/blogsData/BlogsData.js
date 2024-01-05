const Blogs = require("../../models/BlogModel");
const postBlog = async (req, res) => {
  const { title, description, category, authorname } = req.body;
  try {
    if (!req.file) {
      return res.status(400).json({ status: false, message: "No file uploaded" });
    }

    await Blogs.create({
      title: title,
      description: description,
      category: category,
      authorname: authorname,
      image: req.file.filename
    });

    return res
      .status(200)
      .json({ status: true, message: "Blog created Successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: false, message: "An error occurred" });
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
