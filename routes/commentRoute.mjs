//imports
import express from 'express';
import Comment from '../models/comment.mjs';
const router = express.Router();

// Create
router.post('/', async (req, res) => {
    try {
      const newComment = new Comment(req.body);
      const saved = await newComment.save();
      res.status(201).json(saved);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  // Read -GetAll Route
router.get('/', async (req, res) => {
    // Specify Action
    let comments = await Comment.find({});
  
    // Return result
    res.json(comments);
  });

  

  export default router;