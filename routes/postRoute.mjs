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

    //Update 
    router.put('/:id', async (req, res) => {
      try {
        const { text } = req.body;
    
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          { text },
          { new: true, runValidators: true }
        );
    
        if (!updatedPost) {
          return res.status(404).json({ message: 'Post not found' });
        }
    
        res.json(updatedPost);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    });

    // Delete
router.delete('/:id', async (req, res) => {
  // Specify Action
  const deletedPost= await Post.findByIdAndDelete(req.params.id);

  // return result
  res.json(deletedPost); // return deleted itm. optional. can return delete message
});

  export default router;