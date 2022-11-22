import React from "react"
import {Route,Routes} from "react-router-dom"
import Home from "./pages/Home/Home"
import Auth from "./pages/Home/Auth/Auth"
import Questions from "./pages/Home/Question/Question"
import AskQuestion from "./pages/Home/AskQuestion/AskQuestion"
import DisplayQuestion from "./pages/Home/Question/DisplayQuestion"
import Tags from "./pages/Home/Tags/tags"
import Users from "./pages/Home/Users/Users"
import UserProfile from "./pages/Home/UserProfile/UserProfile"

function Routess(){
    return <Routes>
        <Route path="/Questions" element={<Questions/>}/>
        <Route exact path="/" element={<Home/>} />
        <Route path="/Auth" element={<Auth/>} />
        <Route path="/AskQuestion" element={<AskQuestion/>}/>
        <Route path="/AllQuestion/:id" element={<DisplayQuestion />}/>
        <Route path="/Questions/AllQuestion/:id" element={<DisplayQuestion />}/>
        <Route path="/Tags" element={<Tags />} />
        <Route path="/Users" element={<Users />} />
        <Route path="Users/:id" element={<UserProfile/>}/>
        </Routes>
}
export default Routess;