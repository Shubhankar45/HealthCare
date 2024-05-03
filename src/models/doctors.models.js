import mongoose from "mongoose"

const doctorsSchema=new mongoose.Schema({
name:{
    type:String,
    required:true
},
experience:{
    type:Number,
    required:true
},
specialization:{
    type:String,
    required:true,
    unique:true
}

},{timestamps:true})


export const Doctor=mongoose.model("Doctor",doctorsSchema)