import React from 'react'
import moment from 'moment'
import { useSelector,useDispatch } from 'react-redux'

import Avatar from '../../../components/Avatar/Avatar'
import {Link,useParams} from "react-router-dom"
import "./displayanswer.css"
import { deleteAnswer } from '../../../actions/question'

const DisplayAnswer = ({question,handleShare}) => {

    const dispatch=useDispatch()
    const {id}=useParams()
  const User=useSelector(state => state.currentUserReducer)
  const handleDelete=(answerId,noOfAnswers)=>{
          dispatch(deleteAnswer(id,answerId,noOfAnswers - 1))
  }
  return (
    <div>
        {question.answer.map(ans =>{
          return(
          <div className="display-ans"  key={ans._id}>
            <p style={{color:"rgba(0, 0, 0, 0.900)"}}>{ans.answerBody}</p>
            <div className="display-action-user">
            <div style={{marginLeft:"-6px"}}>
                <button className='display-action-btn' onClick={handleShare}>Share</button>
                {
                                  User?.result?._id === ans?.userId && (
                                <button className='display-action-btn' onClick={()=>{
                                  handleDelete(ans._id,question.noOfAnswers)
                                }}>Delete</button>
                                        
                                  )
                                }
               
                </div>
                <div className='display-ans-user'>
                    <p className='display-ans-time'>answer {moment(ans.answerOn).fromNow()}</p>
                
                <Link to={`/Users/${ans.userId}`} className="user-link" style={{textDecoration:"none"}}>
                            <Avatar backgroundColor="green" px="10px" py="5px">
                            {ans.userAnswer.charAt(0).toUpperCase()}</Avatar>
                            <div style={{marginLeft:"9px"}}>
                                {ans.userAnswer}
                            </div>
                        </Link>
                        </div>
            </div>
          </div>)
        }

       ) }
    </div>
  )
}

export default DisplayAnswer
