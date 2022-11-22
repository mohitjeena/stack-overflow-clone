import React from 'react'
import "./LeftSideBar.css"
import { NavLink,Link } from 'react-router-dom'
import Globe from "../../assets/browser.png"
const LeftSideBar = () => {


  return (
    <div className='left-sidebar'>
    <nav className="nav-sidebar">
   
    
    
            <Link exact to="/" className="nav-side-links"  style={{display:"flex",
            justifyContent:"flex-start"}}>
            <p>
            Home</p></Link>
    
        <div className='side-nav-div'>
        <div>
       <p> Public</p></div>
        <NavLink to="/Questions" className="nav-side-links"  >
        <img width="16px" src={Globe} alt="Globe" />
        <p style={{paddingLeft:"6px"}}>Question</p></NavLink>
        <NavLink to="/Tags" className="nav-side-links" >
            <p>Tags</p>
        </NavLink>
        <NavLink to="/Users" className="nav-side-links">
            <p>Users</p>
        </NavLink>
        </div>
    </nav>
      
    </div>
  )
}

export default LeftSideBar
