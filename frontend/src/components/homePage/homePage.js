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

    const [authen ,setAuthen] = useState(false);
const [authenUser,setAuthenUser] =useState(false)

return(
    <>  
    <UserContext.Provider value={{authen ,setAuthen , authenUser,setAuthenUser}}> 
 
  <Router>
      
  <div className='backgroundTest'>  

    <nav><ul>

        <li><Link to='/' exact >Home</Link></li>
        <li><Link to='/Admin/loginAdmin'>Admin</Link></li>
        <li><Link to='/Patien/Login'>Patient</Link></li>
        
        {(function(){

         if( authen === true) {

         console.log('hello')

                return (

            <div className='Admindiv'>
             <li><Link to='/Admin/AddNewClinic'>Add New Appointment</Link></li>
             
             <li className='Adminlog'>Welcom you are Admin</li>
           
             </div> 
             
             )}

         else if (authenUser === true){
           
            return (
                <div> 
            
            <li><Link to='/Patien/DisplayAppointments'>Appointments</Link></li>
            <li><Link to='/Patien/MyAppointment'>MY Appointments</Link></li> 
            <li className='Patientlog'>Welcom you are Patient</li>
         </div>   )
                   
                   }
                   else{ 
                       
                       return  <li className='none'> you are not Log in</li>
                } })()}

             
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
    
    </div>

       </Router>
       </UserContext.Provider>
            </>
)

}