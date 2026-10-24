import mongoose from "mongoose";


let roomshcema = new mongoose.Schema({
    roomNumber:{
        type:String,
        unique: true,
        required: true,
        minlength:[2 , "minlength is 3 character"],
        maxlength: [10 , "maxlength is 10 character"],
        uppercase: true,
        trim : true,
        match: [
        /^[A-Z0-9-]+$/,
        "Room number can only contain letters, numbers, and hyphens"
        ],
    },
    type:{
        type:String,
        enum:["single","double","suite"],
        default:"single"
    },
    capacity : {
        type:Number,
        min: [1,"min number is 1"],
        max: [6, "max number is 6"],
        required: true,
        validate: {
            validator: Number.isInteger,
            message: "capacity must be integer"
        }
    },
    nightlyRate : {
        type: Number,
        min:[1,"Nightly rate must be at least 1 EGP"],
        required:true,
        validate:{
            validator: Number.isInteger,
            message:"Nightly Rate must be an integer"
        }
    },
    floor : {
        type: Number,
        min: [0 , "floor must be at least 0"],
        max: [50 , "floor must be at most 50"],
        default:0,
        validate:{
            validator: Number.isInteger,
            message: "floor must be an integer"
        }
    },
    amenities : {
        type: [String],
        default: [],
        required : true,
        validate: 
        {
            validator: (arr) => arr.length <= 10,
            message: "Amenities cannot exceed 10 items"
        }
    },
    status : {
        type: String ,
        enum : ["active" , "maintenance"],
        default:"active"
    }
}, {timestamps: true})
