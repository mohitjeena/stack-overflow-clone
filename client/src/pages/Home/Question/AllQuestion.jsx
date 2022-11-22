import React from 'react'
import moment from "moment"
import {Link} from "react-router-dom"
const AllQuestion = ({question}) => {
  return (
    <div className='display-question-container'>
      <div className='display-votes-ans'>
          <p>{question.upVote.length - question.downVote.length}</p>
          <p>votes</p>
      </div>
      <div className='display-votes-ans'>
          <p>{question.noOfAnswers}</p>
          <p>answers</p>
      </div>
      <div className='display-question-details'>
        <Link to={`AllQuestion/${question._id}`} className="display-question-title">{question.questionTitle}</Link>
      
      <div className='display-tags-time'>
      <div className='display-tags'>
         {
            question.questionTags.map((tag)=>{
                return <p key={tag}>{tag}</p>
            })
         }
      </div>
    <p className='display-time'>
        asked {moment(question.onPosted).fromNow()} {question.userPosted}
    </p>
      </div>
      </div>
    </div>
  )
}

export default AllQuestion
