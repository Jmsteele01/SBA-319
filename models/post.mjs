import mongoose from 'mongoose';
import User from './user.mjs';

const postSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    unique: false
  },
  likes: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true,
  }
});

const Post = mongoose.model('Post', postSchema);
export default Post;
