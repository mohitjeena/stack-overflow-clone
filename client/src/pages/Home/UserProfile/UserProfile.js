import React from 'react'
import moment from "moment"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBirthdayCake,faPen}  from "@fortawesome/free-solid-svg-icons"
 
import "./UserProfile.css"
import EditProfileForm from './EditProfileForm'
import ProfileBio from './ProfileBio'
import LeftSideBar from '../../../components/Leftsidebar/LeftSideBar'
import Avatar from '../../../components/Avatar/Avatar'
import {  useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
const UserProfile = () => {
    const {id}=useParams()
    const users=useSelector((state)=> state.userReducer)
    const currentProfile = users.filter((user)=> user._id === id)[0]
    const currentUser=useSelector(state => state.currentUserReducer)
     const [Switch,setSwitch]=useState(false)
  return (

    <div className='home-container-1'>
       <LeftSideBar />
       <div className="home-container-2">
        <section>
            <div className="user-details-container">
                <div className="user-details">
                    <Avatar backgroundColor="purple"  color="white" fontSize="50px" py="30px" px="40px" cursor="pointer">
    {currentProfile?.name.charAt(0).toUpperCase()}
                    </Avatar>
                    <div className="user-name">
                      <h1>{currentProfile?.name}</h1>
                      <p><FontAwesomeIcon icon={faBirthdayCake}/> Joined {moment(currentProfile?.joinedOn).fromNow()}</p>
                    </div>
                </div>
                {
                  currentUser?.result._id === id &&
                  <button type='button' onClick={()=> setSwitch(true)} className="edit-profile-btn">
                    <FontAwesomeIcon icon={faPen}/> Edit Profile
                  </button>
                }
            </div>
            {
              Switch ? 
              <EditProfileForm currentUser={currentUser} setSwitch={setSwitch}/>:
              <ProfileBio currentProfile={currentProfile}/>
            }
        </section>
       </div>
    </div>
  )
}

export default UserProfile