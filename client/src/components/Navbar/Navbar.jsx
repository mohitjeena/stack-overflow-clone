import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import decode from "jwt-decode"
import search from "../../assets/search-solid.svg"
import logo from "../../assets/logo.png"
import {useSelector} from "react-redux"
import {Link,useNavigate} from "react-router-dom"
import Avatar from "../Avatar/Avatar"
import "./Navbar.css"
import setCurrentUser from "../../actions/currentUser";
function Navbar(){
    const dispatch=useDispatch()
    let user=useSelector((state)=>(state.currentUserReducer))
    const navigate=useNavigate()
    useEffect(()=>{
        const token=user?.token
        if(token)
        {
            const decodeToken=decode(token)
            if(decodeToken.exp * 1000 < new Date().getTime())
            {
                handleLogOut()
            }
        }
     dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    },[dispatch])
    const handleLogOut=()=>{
        dispatch({type:"LOGOUT"})
        navigate("/")
        dispatch(setCurrentUser(null))
    }
    return (
        <nav className="main-nav">
        <div className="navbar">
         <Link to="/" className="nav-item logo">
            <img src={logo} alt="stack-logo" />
         </Link>
         <Link className="nav-item nav-btn">About</Link>
         <Link className="nav-item nav-btn">Products</Link>
         <Link className="nav-item nav-btn">For Teams</Link>
         <form >
        <input type="text" placeholder="Search..."  />
        <img src={search} alt="search" width="18px" className="search-icon"/>


        {user===null ? 
<Link to="/Auth" className="nav-item nav-links">Log In</Link>
:
       <>
       
        <Avatar display="inline" backgroundColor="#009dff" px="10px" py="7px" borderRadius="50%" color="white" cursor="pointer"><Link to={`/Users/${user?.result?._id}`} style={{color:"white",textDecoration:"none" ,display:"inline"}}>{user.result.name.charAt(0).toUpperCase()}</Link></Avatar>
       <button className="nav-item nav-links" onClick={handleLogOut}>Log out</button>
       </>}
   
</form>  
</div>
        </nav>
      
    )
}
export default Navbar;