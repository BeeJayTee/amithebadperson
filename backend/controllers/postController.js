const Post = require("../models/postModel");
const mongoose = require("mongoose");

// get posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// get single post
const getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

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

module.exports = { addPost, getPosts, getPost };
