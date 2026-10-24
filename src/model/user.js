import mongoose from "mongoose";


let userShema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim: true,
        minlength : [3,"minlegth is 3 chracter"],
        maxlength : [80 , "maxlegth is 80 chracter"]
    },
    email:{
        type:String,
        required:true,
        unique : true,
        lowercase : true,
        trim : true ,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please fill a valid email address']
    },
    password:{
        type:String,
        required:true,
        select:false,
        minlength:[8,"minlength is 8 character"]
    },
    role:{
        type:String,
        enum:["admin","manager","receptionist"],
        default: "receptionist"
    },
    isActive: {
        type:Boolean,
        default: true
    }
},{timestamps:true})


export let user = mongoose.model("useres",userShema);