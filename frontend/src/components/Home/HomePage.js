import React from 'react'
import {BrowserRouter as Router , Routes ,Route,Link} from 'react-router-dom'
import './homePage.css'
import { useContext } from 'react';
import Login from '../Patient/LoginPatient'
import LoginAdmin from '../Admin/LoginAdministrator' 
import Display from '../Patient/DisplayAppointments'
import AddNewClinic from '../Admin/AddNewClinic'
 import Home from '../../Home'
 import { useState } from 'react'
import MyAppointment from '../Patient/MyAppointment'
import { UserContext } from './UserContext'
import Clinics from '../Clinics';
import Card from '../AboutClinic/Card';
import FullCard from '../AboutClinic/FullCard'
import Hero from '../AboutClinic/Hero';
 

export default function HomePage() {

    const info =[
        { 
            clinic:'Clinic 1',
            doctrName:'Fahad Saleh',
           floor:'Second Floor'
        },
        { 
            clinic:'Clinic 2',
            doctrName:'Almounther Fahad',
           floor:'Third Floor'
        },
        { 
            clinic:'Clinic 3',
            doctrName:'Saleh Fahad',
           floor:'Fourth Floor'
        },
        { 
            clinic:'Clinic 4',
            doctrName:'Renad Saleh ',
           floor:'Fifth Floor'
        },
        { 
            clinic:'Clinic 5',
            doctrName:'Norah Fahad',
           floor:'Sixth Floor'
        },
    ]



    const [authen ,setAuthen] = useState(false);
    const [authenUser,setAuthenUser] =useState(false)

 

return(
    <>  
    <UserContext.Provider value={{authen ,setAuthen , authenUser,setAuthenUser}}> 
 
  <Router>
      
   

    {/* <nav> */}
        <ul>

        <li><Link exact to='/'>Home</Link></li>
        <li><Link to='/Admin/LoginAdmin'>Admin</Link></li>
        <li><Link to='/Patien/Login'>Patient</Link></li>
        <li><Link to='/AboutClinic/Hero'>About Clinics</Link></li>
       
        {(function(){

         if( authen === true) {

         console.log('hello')

                return (

            <div className='Admindiv'>
                
            <li ><Link to='/Admin/AddNewClinic'>Add New Appointment</Link></li>
            
            {/* <li><Link to='/Clinics/clinic1'>Clinics</Link></li> */}
            
             <div className='Adminlog'> 
             <p>Loged in as Admin</p>
             </div>

             </div> 
             
             )}

         else if (authenUser === true){
           
            return (
                <div> 
            
            <li><Link to='/Patien/DisplayAppointments'>Appointments</Link></li>
            <li><Link to='/Patien/MyAppointment'>MY Appointments</Link></li> 
           
            <div className='Patientlog'> 
            <li  >Loged as Patient</li>
            </div>
         </div>   )
                   
                   }
                   else{ 
                         return  <li className='none'> you are not Log in</li>
                } })()}

             
        </ul>
    {/* </nav> */}
 

       <Routes>
    
    <Route exact path='/'   element={<Home />}/>
    
     <Route path='/Admin/LoginAdmin'element={<LoginAdmin />}/>
     <Route path='/Admin/AddNewClinic'  element={<AddNewClinic/>}/>
   
    <Route path='/AboutClinic/Hero' element={<Hero data={info} />}/>  
    
    <Route path='/Clinics/:clinic' element={<FullCard data={info}/>}/>
  
    {/* <Route path='/Clinics/:clinic'element={<Clinics/>}/> */}
    
    <Route path='/Patien/Login' element ={<Login />}/>
    <Route path='/Patien/DisplayAppointments' element ={<Display />}/>
    <Route path='/Patien/MyAppointment' element ={<MyAppointment />}/>
    </Routes>
    
   

       </Router>
       </UserContext.Provider>
            </>
)

}