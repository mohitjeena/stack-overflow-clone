import React from 'react'
import "./HomeMainBar.css"
import { useSelector } from 'react-redux'
import {useLocation} from "react-router-dom"
import QuestionList from '../../pages/Home/Question/QuestionList'
import { useNavigate} from "react-router-dom"

const HomeMainBar = () => {
  const questionList=useSelector((state)=>state.questionReducer)
  const location=useLocation()
    const user=useSelector(state => state.currentUserReducer)
 const navigate=useNavigate()
 

    function direct(){
      console.log("hello");
         if(user===null)
         {
          alert("login or signup for askquestion")
        navigate("/Auth")
         }
         else{
          navigate("/AskQuestion")
         }
    }
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {location.pathname==="/"?<h1>Top Questions</h1>:<h1>All Questions</h1>}
        <button onClick={direct} className='question-btn'>Ask Question</button>
      </div>
      <div>
        {questionList.data==null?<h1>Loading...</h1>:
        <>
          <p>{questionList.data.length} Question</p>
          <QuestionList questionList={questionList.data} />
        </>
        }
      </div>
    </div>
  )
}

export default HomeMainBar
