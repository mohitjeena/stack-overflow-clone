import express from "express";
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import userRoutes from "./routes/user.js"
import answerRoutes from "./routes/Answer.js"
import QuestionRoute from "./routes/Question.js"
const app=express();
dotenv.config()
app.use(express.json({limit:"30mb" , extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(cors());

app.get("/",(req,res)=>{
    res.send("this is stack overflow API")
})
app.use("/user",userRoutes)
app.use("/answer",answerRoutes)
const PORT=process.env.PORT || 5000
app.use("/question",QuestionRoute)
 
const DATABASE_URL=process.env.CONNECTION_URL

mongoose.connect(DATABASE_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>app.listen(PORT,()=>{
    console.log(`port is running on ${PORT}`)
})).catch((err)=>{
    console.log(err.message)
})