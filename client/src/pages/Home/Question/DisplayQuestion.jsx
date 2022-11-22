import React from 'react'
import LeftSideBar from '../../../components/Leftsidebar/LeftSideBar'
import RightSideBar from '../../../components/Rightsidebar/RightSideBar'
import QuestionDetails from './QuestionDetails'

const DisplayQuestion = () => {
  
 
  return (
    <div className='home-container-1'>
    <LeftSideBar />
    <div className="home-container-2">
      <QuestionDetails />
      <RightSideBar />
    </div>
    
    </div>
  )
}

export default DisplayQuestion
