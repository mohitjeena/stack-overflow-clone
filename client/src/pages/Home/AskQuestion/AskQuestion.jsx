import React,{useState} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import { askQuestion } from '../../../actions/question'
import "./AskQuestion.css"
const AskQuestion = () => {
      const [questionTitle,setQuestionTitle]=useState('')
      const [questionBody,setQuestionBody]=useState('')
      const [questionTags,setQuestionTags]=useState('')
      const user=useSelector((state)=>state.currentUserReducer)
      const navigate=useNavigate()
      const dispatch=useDispatch()
      const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(askQuestion({questionTitle,questionBody,questionTags,userPosted:user.result.name,userId:user?.result._id},navigate))
      }
      const handleEnter=(e)=>{
        if(e.key === "Enter")
        {
            
            setQuestionBody(questionBody + "\n")
        }
      }
  return (
 <div className="ask-question">
    <div className="ask-ques-container">
        <h1>Ask A Public Question</h1>
        <form onSubmit={handleSubmit} >
            <div className="ask-form-container">
                <label htmlFor="ask-ques-title">
                    <h4>Title</h4>
                    <p>The specific and imagine you're asking a question another person</p>
                    <input type="text" onChange={(e)=>{setQuestionTitle(e.target.value)
                    }} id='ask-ques-title'placeholder='e.g. Is there an R function for finding the index of an element in a vector?'/>
                </label>
                <label htmlFor="ask-ques-body">
                    <h4>Body</h4>
                    <p>include all the information someone would need to answer your question</p>
                    <textarea name="" onKeyPress={handleEnter} onChange={(e)=>{setQuestionBody(e.target.value)
                    }} id="ask-ques-body"  rows="10"></textarea>
                </label>
                <label htmlFor="ask-ques-tags">
                    <h4>Tags</h4>
                    <p>Add up to 5 tags to describe what your question is about</p>
                    <input type="text" onChange={(e)=>{setQuestionTags(e.target.value.split(' '))
                    }} id='ask-ques-tags'placeholder='e.g. (xml typescript wordpress)'/>
                </label>
            </div>
            <input type="submit" value="review your question" className='review-btn'/>
        </form>
    </div>
 </div>
  )
}

export default AskQuestion
