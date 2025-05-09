import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    minlength: 3
  },
  likedPost: {
    type: Boolean,
    required: true,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }, 
  user: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Post',
    required: true,
  }
});

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;
