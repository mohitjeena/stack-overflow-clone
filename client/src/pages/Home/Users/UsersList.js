import React from 'react'
import { useSelector } from 'react-redux'
import "./users.css"
import User from './User'
const UsersList = () => {
    const user=useSelector((state)=> state.userReducer)
  return (
    <div className='user-list-container'>
     {user.map((user) => (
           <User user={user} key={user?._id} />
      ))}
    </div>
  )
}

export default UsersList
