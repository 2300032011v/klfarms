const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");



const app=express();

app.use(cors());

const URL="mongodb+srv://user_vardhan:2300032011@cluster0.ao7c3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("Mongodb connected............"))
.catch((err)=>console.log(err));


app.listen(5000,()=>{
    console.log('server is running on port ${5000}');
} )