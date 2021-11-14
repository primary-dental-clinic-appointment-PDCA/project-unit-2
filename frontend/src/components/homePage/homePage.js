import React from 'react'
import {BrowserRouter as Router , Routes ,Route,Link} from 'react-router-dom'
import './homePage.css'

import Login from '../Patient/login'
import LoginAdmin from '../Admin/loginAdmin' 
// import AdminHome from '../Admin/adminHome'
import AddNewClinic from '../Admin/AddNewClinic'
 import Home from '../../Home'



export default function homePage() {

return(
    <>
      <>
        
        <Router>
    <nav>
        <ul>
            <li><Link to='/' exact >Home</Link></li>
            <li><Link to='/components/Admin/loginAdmin'>Admin</Link></li>
             <li><Link to='/components/Admin/AddNewClinic'>Add New Appointment</Link></li>
            
            <li><Link to='/components/Patien/login'>Patient</Link></li>
        </ul>
    </nav>
 

        {/* <button className='button'>
            <Link to='/components/Admin/loginAdmin' >
    
             Admin </Link> </button>
    
        <button className='button'> 
         <Link to='/components/Patien/login' exact> 
       Patient </Link> </button> */}
      

       <Routes>
    
    <Route path='/' exact element={<Home />}/>
    
    <Route path='/components/Admin/loginAdmin'element={<LoginAdmin />}/>
     <Route path='/components/Admin/AddNewClinic'  element={<AddNewClinic/>}/>
    
    <Route path='components/Patien/login' element ={<Login />}/>
    
    </Routes>
    
    
       </Router>
            </>

     
 
 


     
    </>
)

}