import e from "express";
import dotenv from "dotenv";
import { bootstrap } from "./src/app.js";
dotenv.config()

let app = e()
let port = process.env.PORT

await bootstrap(app,e)

app.listen(port,()=>{
    console.log(`hello from port ${port}`)
})