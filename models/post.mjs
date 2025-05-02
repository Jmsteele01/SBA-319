import mongoose from 'mongoose';

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
  postID: {
    type: String,
    required: false, //make true once default set
    unique: false //make true once default set
  },
//   user: {
//     type: User, 
//     required: true,
//     unique: true
//   }
});

const Post = mongoose.model('Post', postSchema);
export default Post;
