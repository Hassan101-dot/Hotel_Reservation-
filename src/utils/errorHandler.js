
export let errorHandler = (err,req,res,next)=>{
    req.status(err.statusCode || "500").json({
        success:false,
        message:err.message
    })
}