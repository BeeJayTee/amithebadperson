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

// const update post after rating vote
const updatePost = async (req, res) => {
  const { id, value, currentRating } = req.body;
  try {
    if (value === "not") {
      const post = await Post.findById(id);
      post.not += 1;
      post.is += currentRating === "is" ? -1 : 0;
      post.popularity = post.is + post.not;
      const rating = Math.round((post.is / post.popularity) * 100);
      post.rating = rating;
      await post.save();
      // post.$inc({ is: currentRating === "is" ? -1 : 0 });
      // console.log(post.not + post.is, "pop total");
      // post.save();
      // const post = await Post.findByIdAndUpdate(id, {
      //   $inc: {
      //     popularity: currentRating === "is" ? 0 : 1,
      //     not: 1,
      //     is: currentRating === "is" ? -1 : 0,
      //   },
      // });
      res.status(200).json({ message: "updated" });
    }
    if (value === "is") {
      const post = await Post.findById(id);
      post.is += 1;
      post.not += currentRating === "not" ? -1 : 0;
      post.popularity = post.is + post.not;
      const rating = Math.round((post.is / post.popularity) * 100);
      post.rating = rating;
      await post.save();
      // const post = await Post.findOneAndUpdate(
      //   { _id: id },
      //   {
      //     $inc: {
      //       popularity: currentRating === "not" ? 0 : 1,
      //       is: 1,
      //       not: currentRating === "not" ? -1 : 0,
      //     },
      //   }
      // );
      res.status(200).json({ message: "updated" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { addPost, getPosts, getPost, updatePost };
