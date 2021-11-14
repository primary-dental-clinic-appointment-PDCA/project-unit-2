import react from "react";
import {BrowserRouter as Router , Routes ,Route,Link} from 'react-router-dom'
import './components/homePage/homePage.css'
 import LoginAdmin from "./components/Admin/loginAdmin";
import adminHome from "./components/Admin/adminHome";
import Login from "./components/Patient/login";

export default function Home(){

    return(
       <>
       <div  className='homepage'  > 
    
    <h1>Primary  dental <span >clinic</span> <br/>appointment 
    <br/> <span>(PDCA)</span> </h1> 
   
    </div><br/>
       </>
    )
}