
import * as api from "../API/index"
export const askQuestion = (questionData,navigate) => async (dispatch)=> {
       try {
          const {data}=await api.questionPosted(questionData)
          dispatch({type:"POST_QUESTION",payload:data})
          dispatch(fetchAllQuestion())
          navigate("/")
       } catch (error) {
          console.log(error);
       }

}
export const fetchAllQuestion=()=>async (dispatch)=>{
      try {
         const {data}=await api.getAllQuestion()
         dispatch({type:"FETCH_ALL_QUESTION",payload:data})
      } catch (error) {
            console.log(error);
      }
}

export const deleteQuestion=(id,navigate)=> async (dispatch)=>{
   const {data}=await api.deleteQuestion(id)
   dispatch(fetchAllQuestion())
   navigate("/")
}

export const voteQuestion=(id,value,userId)=>async (dispatch)=>{
   try {
   const {data}=await api.voteQuestion(id,value,userId)
      dispatch(fetchAllQuestion())
   } catch (error) {
      console.log(error);
   }
}

export const postAnswer=(answerData)=> async (dispatch)=>{
   try {
      const {id,noOfAnswers,answerBody,userAnswer,userId}=answerData
      const {data}=await api.postAnswer(id,noOfAnswers,answerBody,userAnswer,userId)
      dispatch({type:"FETCH_ANSWER",payload:data})
     dispatch(fetchAllQuestion())
   } catch (error) {
      console.log(error);
   }
}

export const deleteAnswer=(id,answerId,noOfAnswers)=> async (dispatch)=>{
    try {
      const {data}=await api.deleteAnswer(id,answerId,noOfAnswers)
      dispatch(fetchAllQuestion())
    } catch (error) {
        console.log(error)
    }
} 