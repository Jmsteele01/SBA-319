//imports
import express from "express";
import dotenv from "dotenv";
import connectDB from './db/conn.mjs';
import userRoute from './routes/userRoute.mjs';
import User from './models/user.mjs';


//setups
dotenv.config();
const PORT = process.env.PORT;
const app = express();
app.use(express.json());

//middleware
app.use(express.json());
connectDB();

const testUsers = [
  { username: 'alice', email: 'alice@example.com', password: 'password123' },
  { username: 'bob', email: 'bob@example.com', password: 'securepass' },
  { username: 'charlie', email: 'charlie@example.com', password: 'hunter42' },
  { username: 'diana', email: 'diana@example.com', password: 'sunshine7' },
  { username: 'eve', email: 'eve@example.com', password: 'password1' }
];
await User.insertMany(testUsers);
console.log('Test users ready.');



//routes
app.use('/api/users', userRoute);
app.get('/', (req, res) => {
  res.send('Welcome to the server!');
});

//errormiddleware
app.use((err, req, res, next)=>{
res.status(500).json({msg: 'Server Error'});
});

//listeners
app.listen(PORT, ()=>{
    console.log(`Server for 319 is running on PORT: ${PORT}`)
});
