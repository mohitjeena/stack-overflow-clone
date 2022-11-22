import { faHourglass3 } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import "./UserProfile.css"
const ProfileBio = ({currentProfile}) => {
  return (
    <div>
    <div>
    {
      currentProfile?.tags.length !== 0?
     <> <h2>watched tag</h2>
     {currentProfile?.tags.map((tag) =>
     <h4 key={tag}>{tag}</h4> )}</>
     :<p>0 watched tag</p>
    }</div>
  <div>
    {currentProfile?.about?
    <>
      <h2>About</h2>
     <h4>{currentProfile.about}</h4> 
    </>:
    <p>No Bio Found</p>
    }
  </div>
    </div>
  )
}

export default ProfileBio