//imports
import express from 'express';
import Post from '../models/post.mjs';
const router = express.Router();

// Create
router.post('/', async (req, res) => {
    try {
      const newPost = new Post(req.body);
      const saved = await newPost.save();
      res.status(201).json(saved);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  // Read -GetAll Route
router.get('/', async (req, res) => {
    // Specify Action
    let posts = await Post.find({});
  
    // Return result
    res.json(posts);
  });

  

  export default router;