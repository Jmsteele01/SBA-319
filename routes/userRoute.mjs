//imports
import express from 'express';
import User from '../models/user.mjs';
const router = express.Router();

// Create
router.post('/', async (req, res) => {
    // Create newDoc variable
    let newUser = new User(req.body);
  
    // Save newDoc to DB
    await user.save();
  
    // Return new object
    res.json(newUser);
  });

  // Read -GetAll Route
router.get('/', async (req, res) => {
    // Specify Action
    let users = await User.find({});
  
    // Return result
    res.json(users);
  });

  

  export default router;