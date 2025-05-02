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
//   originalPostID: {
//     type: String,
//     required: true
//   },
//   user: {
//     type: String,
//     required: true
//   }
});

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;
