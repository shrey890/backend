/*
import express from "express";
const app = express()   
(async () => {
    try {
        mongoose.connect(`${env.process.MONGODB_URI}/${DB_NAME}`)
    app.on("ERROR",(error)=>{
        throw error
    })
    app.listen(process.env.PORT,()=>{
        console.log('listening on port 8000')
    })
    } catch (error) {
        console.error("ERROR", error);
        throw err
    }
})()
*/
import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
    path:'./env'
})
connectDB().then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`server listening on ${process.env.PORT}`)
    })
})