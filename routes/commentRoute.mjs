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

      //Update 
      router.put('/:id', async (req, res) => {
        try {
          const { text } = req.body;
      
          const updatedComment = await Comment.findByIdAndUpdate(
            req.params.id,
            { text },
            { new: true, runValidators: true }
          );
      
          if (!updatedComment) {
            return res.status(404).json({ message: 'Post not found' });
          }
      
          res.json(updatedComment);
        } catch (err) {
          res.status(400).json({ error: err.message });
        }
      });

    // Delete
router.delete('/:id', async (req, res) => {
    // Specify Action
    const deletedComment = await Comment.findByIdAndDelete(req.params.id);
  
    // return result
    res.json(deletedComment); // return deleted itm. optional. can return delete message
  });

  export default router;