import React from 'react'
import {BrowserRouter as Router , Routes ,Route,Link} from 'react-router-dom'
import './homePage.css'
import { useContext } from 'react';
import Login from '../Patient/Login'
import LoginAdmin from '../Admin/LoginAdmin' 
import Display from '../Patient/DisplayAppointments'
import AddNewClinic from '../Admin/AddNewClinic'
 import Home from '../../Home'
 import { useState } from 'react'
import MyAppointment from '../Patient/MyAppointment'
import { UserContext } from './UserContext'



export default function HomePage() {

    const [authen ,setAuthen] = useState('false');


return(
    <>  
    <UserContext.Provider value={{authen ,setAuthen}}> 
 
  <Router>
    <nav>
        
        <ul>

        <li><Link to='/' exact >Home</Link></li>
        <li><Link to='/Admin/loginAdmin'>Admin</Link></li>
        <li><Link to='/Patien/Login'>Patient</Link></li>
        
        {(function(){

         if( authen === 'shahad') {

         console.log('hello')
                return (
                    <div> 
             <li className='Adminlog'> Welcom you are Admin </li>
             <li><Link to='/Admin/AddNewClinic'>Add New Appointment</Link></li>
            
             </div> 
             )}

         else if (authen === 'Fatimh'){
           
            return (
                <div> 
           <li> Welcom you are Patient </li>
            <li><Link to='/Patien/DisplayAppointments'>Appointments</Link></li>
            <li><Link to='/Patien/MyAppointment'>MY Appointments</Link></li> 
         </div> 
         )
                   
                   }
                   else{ 
                       return <li> you are not Log in</li>
                }


                    })()}

             
        </ul>
    </nav>
 

       <Routes>
    
    <Route path='/' exact element={<Home />}/>
    
    <Route path='/Admin/LoginAdmin'element={<LoginAdmin />}/>
     <Route path='/Admin/AddNewClinic'  element={<AddNewClinic/>}/>
    
    <Route path='/Patien/Login' element ={<Login />}/>
    <Route path='/Patien/DisplayAppointments' element ={<Display />}/>
    <Route path='/Patien/MyAppointment' element ={<MyAppointment />}/>
    </Routes>
    
    
       </Router>
       </UserContext.Provider>
            </>
)

}