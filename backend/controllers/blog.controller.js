const Blog = require("../models/blog");
const Categories = require("../models/category");
const slugify = require("slugify");

// Create a new blog
exports.createBlog = async (req, res) => {
  try {
    const { title} = req.body;

    const blog = new Blog({
      ...req.body,
      slug: slugify(title).toLowerCase(),
    });

    await blog.save();
    res.status(201).json(blog);
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({})
      .populate("categories", "name slug")
      .populate("tags", "name slug")
      .populate("postedBy", "username email") // Only get username and email
      .sort({ createdAt: -1 });

    console.log("Get Blogs");
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get single blog by slug
exports.getBlogBySlug = async (req, res) => {
  try {
    const getBlog=await Blog.findById(req.params.slug, req.body);
    res.json(getBlog,"Success")
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a blog by slug
exports.updateBlog = async (req, res) => {
  try {
    const updateBlog=await Blog.findByIdAndUpdate(req.params.slug, req.body, { new: true });
    res.json("Update Blog");

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
   const blog = await Blog.findByIdAndDelete({ _id: req.params.id });
       if (!blog) return res.status(404).json({ error: "Tag not found" });
   

    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
