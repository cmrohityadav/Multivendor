import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDb } from './db/db'

dotenv.config();

connectDb();

const app=express();

app.use(cors());

const PORT =process.env.PORT || 4000;

// server up/down checking

app.get('/ping',(req:Request,res:Response)=>{
    res.send("server is running well")
})
app.listen(PORT,()=>{
    console.log(`Server is running on  ${PORT}`)
})