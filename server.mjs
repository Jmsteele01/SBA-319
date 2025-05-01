//imports
import express from "express";
import dotenv from "dotenv";
import connectDB from './db/conn.mjs';
import userRoute from './routes/userRoute.mjs';


//setups
dotenv.config();
const PORT = process.env.PORT;
const app = express();

//middleware
app.use(express.json());
connectDB();
mongoose.connect('mongodb://localhost:27017/conn.mjs')
  .then(() => {
    app.listen(3000, () => console.log('Server running on port 3000'));
  })
  .catch(err => console.error('DB connection error:', err));


//routes
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
