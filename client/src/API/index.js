import axios from 'axios'
const API = axios.create({ baseURL:'http://localhost:5000'})


API.interceptors.request.use((req) => {
    if(localStorage.getItem('Profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})
// API.interceptors.request.use((req)=>{
//     if(localStorage.getItem('Profile')){
//         req.headers.authorization=`Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
//     }
// })

export const logIn = (authData) => API.post('/user/login', authData);
export const signUp = (authData) => API.post('/user/signup', authData);
export const questionPosted=(questionData)=> API.post("/question/Ask",questionData)
export const getAllQuestion=()=> API.get("/question/get")
export const deleteQuestion=(id)=>API.delete(`/question/delete/${id}`)
export const voteQuestion=(id,value,userId)=>API.patch(`/question/vote/${id}`,{value,userId})

export const deleteAnswer=(id,answerId,noOfAnswers)=>API.patch(`/answer/delete/${id}`,{id,answerId,noOfAnswers})
export const postAnswer=(id,noOfAnswers,answerBody,userAnswer,userId)=>API.patch(`/answer/post/${id}`,{id,noOfAnswers,answerBody,userAnswer,userId})

export const fetchAllUsers=()=>API.get("/user/getAllUsers")
export const updateProfile=(id,updateData)=>API.patch(`/user/update/${id}`,updateData)