import React from 'react'
import "../../App.css"
import LeftSideBar from '../../components/Leftsidebar/LeftSideBar'
import RightSideBar from '../../components/Rightsidebar/RightSideBar'
import HomeMainBar from '../../components/Homemainbar/HomeMainBar'
const Home = () => {
  return (
    <div className='home-container-1'>
    <LeftSideBar />
    <div className="home-container-2">
      <HomeMainBar />
      <RightSideBar />
    </div>
    
    </div>
  )
}

export default Home
