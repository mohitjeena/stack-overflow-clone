import {BrowserRouter as Router} from "react-router-dom"
import './App.css';
import { useEffect } from "react";
import { fetchAllQuestion } from "./actions/question";
import { useDispatch } from "react-redux";
import Routess from "./Routes";
import Navbar from './components/Navbar/Navbar';
import { fetchAllUsers } from "./actions/user";
function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
  dispatch(fetchAllQuestion())
  dispatch(fetchAllUsers())
  },[dispatch])
  return (
    <div className="App">
    <Router>
   <Navbar/>
   <Routess />
   </Router>
    </div>
  );
}

export default App;
