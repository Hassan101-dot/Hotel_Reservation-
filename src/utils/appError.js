export class AppError extends Error{
    constructor(message,statuscode){
        super(message),
        this.statuscode= statuscode,
        this.message = message
    }
}