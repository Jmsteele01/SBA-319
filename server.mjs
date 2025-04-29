//imports
import express from "express";
import dotenv from "dotenv";

//setups
const PORT = 3000;
const app = express();

//middleware
app.use(express.json());

//routes

//errormiddleware
app.use((err, req, res, next)=>{
res.status(500).json({msg: 'Server Error'});
})

//listeners
app.listen(PORT, ()=>{
    console.log(`Server is running on PORT: ${PORT}`)
})