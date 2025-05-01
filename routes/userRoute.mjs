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

  

  export default router;