import Question from "../models/Question.js";
import mongoose from "mongoose";
 
export const postAnswer= async (req,res)=>{
    const {id:_id}=req.params
    const {noOfAnswers,answerBody,userAnswer,userId }=req.body
    if(!mongoose.Types.ObjectId.isValid(_id)){
        res.status(404).send("invalid question")   
    }
    updateNoOfAnswer(_id,noOfAnswers)
    try {
        const updatedQuestion=await Question.findByIdAndUpdate(_id,{$addToSet:{'answer':[{answerBody,userAnswer,userId}]}})
         res.status(200).json(updatedQuestion)
    } catch (error) {
        res.status(400).json(error)
    }
}
export const updateNoOfAnswer=async (_id,noOfAnswers)=>{
     try {
        await Question.findByIdAndUpdate(_id,{$set:{'noOfAnswers':noOfAnswers}})
     } catch (error) {
        console.log(error);
     }
}
export const deleteAnswer=async (req,res)=>{
     const {id:_id}=req.params
     const {answerId,noOfAnswers}=req.body
     if(!mongoose.Types.ObjectId.isValid(_id)){
        res.status(404).send("invalid question")   
    }
    if(!mongoose.Types.ObjectId.isValid(answerId)){
        res.status(404).send("invalid answer")   
    }
    updateNoOfAnswer(_id,noOfAnswers)
    try {
        await Question.updateOne({_id} ,{$pull:{'answer':{_id:answerId}}})
        res.status(200).json("successfully deleted...")
    } catch (error) {
        res.status(405).json(error)
    }
}