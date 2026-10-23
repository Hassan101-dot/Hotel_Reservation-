import mongoose from "mongoose"

export async function connction() {
    try{
        await mongoose.connect(process.env.CONNECT_DATABASE)
        console.log("connected")
    }catch(err){
        console.log(err.message)
    }
}