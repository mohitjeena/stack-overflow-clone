import React,{useState} from 'react'
import "./questiondetails.css"
import copy from "copy-to-clipboard"
import { useLocation } from 'react-router-dom'
import { postAnswer ,deleteQuestion,voteQuestion} from '../../../actions/question'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import DisplayAnswer from './DisplayAnswer'
import { useParams,Link } from 'react-router-dom'
import upvote from "../../../assets/upvote.svg"
import { useSelector } from 'react-redux'
import downvote from "../../../assets/downvote.svg"
import Avatar from "../../../components/Avatar/Avatar"
import moment from "moment"


const QuestionDetails = () => {
    const {id}=useParams()
    const questionList=useSelector(state => state.questionReducer)
    const navigate=useNavigate()
    const [Answer,setAnswer]=useState('')
    const dispatch=useDispatch()
    const location=useLocation()
    const url="http://localhost:3000"
    // console.log(id);
    // const questionList=[{
    //     id:'0',
    //     noAnswer:2,
    //     upvotes:1,
    //     downvotes:1,
    //     title:"what is function?",
    //     body:"It meant to be",
    //     tags:["c","c++","java","python","sql"],
    //     posted:"mano",
    //     onPosted:"jan 10",
    //     userPosted:"mohit",
    //     answer:[{
    //         id:0,
    //         answerTitle:"this is arrow function",
    //         answerBody:"arrow func is js function",
    //         onPosted:"may 20",
    //         userPosted:"virat",
    //         userId:"4"
    //     }]
    //   },{
    //     id:'1',
    //     noAnswer:3,
    //     upvotes:2,
    //     downvotes:1,
    //     title:"what is function?",
    //     body:"It meant to be",
    //     tags:["c","c++","java","python","sql"],
    //     posted:"mano",
    //     onPosted:"jan 10",
    //     userPosted:"mohit",
    //     answer:[{
    //         id:1,
    //         answerTitle:"this is arrow function",
    //         answerBody:"arrow func is js function",
    //         onPosted:"mar 23",
    //         userPosted:"virat"
    //     }]
    //   },{
    //     id:'2',
    //     noAnswer:0,
    //     upvotes:3,
    //     downvotes:1,
    //     title:"what is function?",
    //     body:"It meant to be",
    //     tags:["c","c++","java","python","sql"],
    //     posted:"mano",
    //     onPosted:"jan 10",
    //     userPosted:"mohit",
    //     answer:[{
    //         id:2,
    //         answerTitle:"this is arrow function",
    //         answerBody:"arrow func is js function",
    //         onPosted:"feb 12",
    //         userPosted:"virat"
    //     }]
    //   }]
        const User=useSelector(state => state.currentUserReducer)
      const handlePostAns=(e,answerLength)=>{
        e.preventDefault()
        console.log(answerLength);
        if(User === null)
        {
          alert("Login or SignUp to answer a question")
          navigate("/Auth")
        }
        else{
          if(Answer === ' ')
          {
            alert("enter your answer before submiting")
          }
          else{
            dispatch(postAnswer({id,noOfAnswers:answerLength + 1,answerBody:Answer,userAnswer:User.result.name,userId:User.result._id}))
          }
        }
      }
      const handleShare=()=>{
          copy(url+location.pathname)
          alert("copid url: "+url+location.pathname)
      }
      const handleDelete=()=>{
        dispatch(deleteQuestion(id,navigate))
      }
      const handleUpVote=()=>{
        dispatch(voteQuestion(id,'upVote',User.result._id,))
      }
      const handleDownVote=()=>{
        dispatch(voteQuestion(id,'downVote',User.result._id,))
      }
     

  return (
    <div className='question-details-page'>
      {
        questionList.data===null?"Loading...":
        <>
            {
                questionList.data.filter(question=> question._id === id).map((question)=>(
              <div key={question._id}>
                   <section className="question-details-container">
                    <h1>{question.questionTitle}</h1>
                    <div className="question-details-container-2">
                        <div className="question-votes">
                        <img style={{cursor:"pointer"}} src={upvote} width="18" alt="" onClick={handleUpVote} />
                        <p>{question.upVote.length - question.downVote.length}</p>
                         <img style={{cursor:"pointer"}} src={downvote} width="18" alt="" onClick={handleDownVote}/>
                        </div>
                        <div style={{width:"100%"}} className="question-body-container">
                        <p className='question-body' style={{color:"rgba(0, 0, 0, 0.900)"}}>{question.body}</p>
                        <div className="question-details-tags">
                            {
                                question.questionTags.map((tag)=>{
                                   return <p key={tag}>{tag}</p>
                                })
                            }
                        </div>
                        <div className="question-action-user">
                            <div>

                                <button className='question-details-btn' onClick={handleShare}>Share</button>
                                {
                                  User?.result?._id === question?.userId && (
                                <button className='question-details-btn' onClick={handleDelete}>Delete</button>
                                        
                                  )
                                }
                                </div>
                                <div className='question-details-user'>
                        <p style={{fontWeight:"500",  color: "rgba(0, 0, 0, 0.712)"}}>asked {moment(question.onPosted).fromNow()}</p>
                       <div className="question-details-avatar">
                       
                        <Link  to={`/Users/${question.userId}`} className="user-link" style={{textDecoration:"none",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <Avatar backgroundColor="orange" px="10px" py="5px" style={{fontWeight:"600"}}>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                            
                              <p style={{marginLeft:"10px"}}>{question.userPosted}</p> 
                          
                        </Link>
                        </div>
                           </div>
                        </div>
                        </div>
                    </div>
                   </section>
                   <hr />
                   {
                     question.noOfAnswers !== null && 
                     <section className='ans-details-container'>
                     <h1>{question.noOfAnswers} answers</h1>
                     <DisplayAnswer key={question._id} question={question} handleShare={handleShare}/>
                     </section>
                   }
                   <hr />
                   <section className="post-ans-container">
                    <h1>Your Answer</h1>
                    <form onSubmit={(e)=>{
                      handlePostAns(e,question.answer.length)
                    }}>
                    <textarea onChange={(e)=>{ setAnswer(e.target.value)}} name="" id="" cols="30" rows="10"></textarea><br/>
                    <input type="submit" value="Post Your Answer" className='post-ans-btn'/>
                    </form>
                    <p style={{margin:"25px 0"}}>Browse other Question tagged
                    {
                        question.questionTags.map((tag)=>(
                     <Link to="/Tags" key={tag} className="ans-tags" style={{textDecoration:"none"}}>{tag} </Link>
                          
                        ))
                    } or 
                       <Link to="/AskQuestion" style={{textDecoration:"none",color:"#009dff"}}> ask your own question</Link>
                    </p>
                   </section>
              </div>
                ))
            }
        </>
      }
    </div>
  )
}

export default QuestionDetails
