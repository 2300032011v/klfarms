const { toBeRequired } = require('@testing-library/jest-dom/matchers')
const mongoose=require('mongoose')

const StudentSchema=new mongoose.Schema({
    studentId:{
        type:String,
        required:true,
        unique:true
    },
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model("StudentProfile",StudentSchema)