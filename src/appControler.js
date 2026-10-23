import { connction } from "./config/dataBase.js"
import { errorHandler } from "./utils/errorHandler.js"


export let bootstrap = async (app,express)=>{
    app.use(express.json())
    //connction database
    connction()

    // rautes end point

    // handler error
    app.use(errorHandler)
}