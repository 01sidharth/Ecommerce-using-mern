const port=4000;
const express=require("express")
const app=express();
const mongoose=require("mongoose")
const jwt=require("jsonwebtoken")
const multer=require("multer")
const path=require("path")
const cors=require("cors")

app.use(express.json())
app.use(cors())

//Database connection with mongoDB
mongoose.connect("mongodb+srv://sidharthkv:Pass@953@cluster0.xkj130y.mongodb.net/e-commerce")

//API creation
app.get("/",(req,res)=>{
    res.send("Express App is running")
})
app.listen(port,(err)=>{
    if(!err){
        console.log("Server Running on Port"+port);
    }
    else
    {
        console.log("Error:"+err);
    }
})