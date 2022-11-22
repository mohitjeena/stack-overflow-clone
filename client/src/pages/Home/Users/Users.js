import React from 'react'
import { useLocation } from 'react-router-dom'
import UsersList from './UsersList'
import LeftSideBar from '../../../components/Leftsidebar/LeftSideBar'
import "./users.css"
const Users = () => {

  return (
    <div className='home-container-1'>
         <LeftSideBar />
         <div className="home-container-2" style={{marginTop:"30px"}}>
                <h1 style={{fontWeight:"500"}}>Users</h1>
                <UsersList />
                </div>
    </div>
  )
}

export default Users