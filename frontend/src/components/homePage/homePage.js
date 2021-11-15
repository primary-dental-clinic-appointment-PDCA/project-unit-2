import React from 'react'
import {BrowserRouter as Router , Routes ,Route,Link} from 'react-router-dom'
import './homePage.css'

import Login from '../Patient/login'
import LoginAdmin from '../Admin/loginAdmin' 
import Display from '../Patient/DisplayAppointments'
import AddNewClinic from '../Admin/AddNewClinic'
 import Home from '../../Home'
import { useState } from 'react'
import MyAppointment from '../Patient/MyAppointment'



export default function HomePage() {

 


return(
    <>  
     <Router>
    <nav>
        <ul>
            <li><Link to='/' exact >Home</Link></li>
            <li><Link to='/components/Admin/loginAdmin'>Admin</Link></li>
             <li><Link to='/components/Admin/AddNewClinic'>Add New Appointment</Link></li>
            
            <li><Link to='/components/Patien/login'>Patient</Link></li>
            <li><Link to='/components/Patien/DisplayAppointments'>Appointments</Link></li>
            <li><Link to='/components/Patien/MyAppointment'>MY Appointments</Link></li>
        </ul>
    </nav>
 

       <Routes>
    
    <Route path='/' exact element={<Home />}/>
    
    <Route path='/components/Admin/loginAdmin'element={<LoginAdmin />}/>
     <Route path='/components/Admin/AddNewClinic'  element={<AddNewClinic/>}/>
    
    <Route path='components/Patien/login' element ={<Login />}/>
    <Route path='components/Patien/DisplayAppointments' element ={<Display />}/>
    <Route path='components/Patien/MyAppointment' element ={<MyAppointment />}/>
    </Routes>
    
    
       </Router>
            </>
)

}