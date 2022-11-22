import React, { useState } from 'react'
import {login} from "../../../actions/Auth"
import {signup} from "../../../actions/Auth"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "./Auth.css"
import AboutAuth from './AboutAuth'
import icon from "../../../assets/logo2.png"
const Auth = () => {
    const [isSignUp,setIsSignUp]=useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate=useNavigate()
    const dispatch=useDispatch()
    function handleSwitch(){
      setIsSignUp(!isSignUp)
    }
    const handleSubmit=(e)=>{
          e.preventDefault()
        
          if(!email && !password){
            alert("enter email and password")
          }
          if(isSignUp)
          {
            if(!name){
              alert("enter your name")
            }
            dispatch(signup({name,password,email}, navigate))
          }else{
            dispatch(login({email,password}, navigate))
          }
    }
  return (
    <section className='auth-section'>
     {isSignUp && <AboutAuth />}
    <div className='auth-container-2'>
     {!isSignUp && <img src={icon} alt="stack overflow" className='auth-icon'/>}
     <form onSubmit={handleSubmit} method="POST">
     { isSignUp && 
     <label htmlFor='name'>
      <h4>Display Name</h4>
      <input type="text" id='name' name='name' onChange={(e)=>{
        setName(e.target.value)
      }}/>
     </label>
     }
      <label htmlFor="email">
        <h4>Email</h4>
        <input type="email" name='email' id='email' onChange={(e)=>{
        setEmail(e.target.value)
      }}/>
      </label>
      <label htmlFor="password">
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <h4>Password</h4>
        {!isSignUp && <p style={{color:"#007ac6",fontSize:"13px"}}>forgot password?</p>}
        </div>
        <input type="password" name='password' id='password' onChange={(e)=>{
        setPassword(e.target.value)
      }}/>
        </label>
        {isSignUp && <p style={{color:"#666767",fontSize:"13px"}}>Password must contain at least eight <br />characters,including at least 1 letter and 1 <br />number.</p>}
        {isSignUp &&
      <label htmlFor="check" className='auth-check'>
        <input  type="checkbox" id='check'/>
        <p style={{fontSize:"13px"}}>opt-in to receive occasional, <br />product updates,user research invitations,<br />company announcements,and digests</p>
      </label>}
      <button type='submit' className='auth-btn'>{isSignUp? "Sign Up":"Log In"}</button>
     </form>
     {isSignUp && <p style={{color:"#666767",fontSize:"13PX"}}>By clicking "Sign Up" you agree to our 
     <span style={{color:"#007ac6"}}> term of <br />service</span>,
     <span style={{color:"#007ac6"}}> privacy polocy</span> and 
     <span style={{color:"#007ac6"}}> cookie polocy</span>.</p>}
     <p>
      {isSignUp?"Already have an account":"Don't have an account?"}
     <button type='button'className='handle-switch-btn' onClick={handleSwitch}>{isSignUp?"Log In":"Sign Up"}</button>

     </p>
    </div>
    </section>
  )
}

export default Auth
