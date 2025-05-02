//imports
import express from 'express';
import User from '../models/user.mjs';
const router = express.Router();

// Create
router.post('/', async (req, res) => {
    try {
      const newUser = new User(req.body);
      const saved = await newUser.save();
      res.status(201).json(saved);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  // Read -GetAll Route
router.get('/', async (req, res) => {
    // Specify Action
    let users = await User.find({});
  
    // Return result
    res.json(users);
  });

  // Delete
router.delete('/:id', async (req, res) => {
  // Specify Action
  const deletedUser = await User.findByIdAndDelete(req.params.id);

  // return result
  res.json(deletedUser); // return deleted itm. optional. can return delete message
});

  export default router;