import React,{useState} from 'react'

import {useDispatch} from "react-redux"
import { updateProfile } from '../../../actions/user'
import "./UserProfile.css"
const EditProfileForm = ({currentUser,setSwitch}) => {
  const dispatch=useDispatch()
  const [name,setName]=useState(currentUser?.result?.name)
  const [about,setAbout]=useState(currentUser?.result?.about)
  const [tags,setTags]=useState(' ')
  const handleSubmit=(e)=>{
    console.log("heelo")
    e.preventDefault()
    if(tags.length === 0)
    {
      dispatch(updateProfile(currentUser?.result?._id,{name,about,tags:currentUser?.result?.tags}))
    }else{
      dispatch(updateProfile(currentUser?.result?._id,{name,about,tags}))
    }
    setSwitch(false)
  }
  return (
    <div>
       <h1 className='edit-profile-title'>Edit Your Profile</h1>
       <h2 className="edit-profile-title-2">Public Information</h2>

       <form className="edit-profile-form" onSubmit={(e)=>handleSubmit(e)}>
   <label htmlFor="name">
    <h3>Display Name</h3>
    <input type="text" name="" id="name" value={name} onChange={(e)=> setName(e.target.value)}/>
   </label>
   <label htmlFor="about">
   <h3>About Me</h3>
    <textarea name="" id="about" cols="30" rows="10" value={about} onChange={(e)=> setAbout(e.target.value)}></textarea>
   </label>
   <label htmlFor="tags">
    <h3>Watched Tags</h3>
    <p>Add tags separated by 1 space</p>
    <input type="text" name="" id="" onChange={(e)=> setTags(e.target.value.split(' '))}/>
   </label>
   <br />
   <button type='submit'  className="edit-profile-save-btn">Save Profile</button>
   <button type='button' className='edit-profile-cancel-btn' onClick={()=> setSwitch(false)}>Cancel</button>
       </form>

    </div>
  )
}

export default EditProfileForm