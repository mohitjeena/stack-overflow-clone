import React from 'react'
import AllQuestion from './AllQuestion'
const QuestionList = ({questionList}) => {
  return (
    <>
          {questionList.map((question)=>{
          return  <AllQuestion question={question} key={question}/>
          })}
    </>
  )
}

export default QuestionList
