const express = require("express");

const {
  addPost,
  getPosts,
  getPost,
  updatePost,
} = require("../controllers/postController");

const router = express.Router();

// get all posts
router.get("/", getPosts);

// get a single post
router.get("/:id", getPost);

// add a new post
router.post("/add", addPost);

// update a post
router.patch("/update", updatePost);

module.exports = router;
