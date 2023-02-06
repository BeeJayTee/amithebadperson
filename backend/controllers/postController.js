const Post = require("../models/postModel");
const mongoose = require("mongoose");

// add post
const addPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const post = await Post.create({ title: title, content: content });
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { addPost };
