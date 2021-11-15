import React from 'react'
import {BrowserRouter as Router , Routes ,Route,Link} from 'react-router-dom'
import '../../index.css'
import './login.css'
import { useContext } from 'react'
import { UserContext } from '../HomePage/UserContext'
 
export default function Login() {
    const {authenUser ,setAuthenUser} = useContext(UserContext)


return(
    <>
     
    <div className='Patientlogin'>
    <h1>Login page  for Patient</h1>

     
        <input 
        type='text'
         placeholder='Enter your userName'
         name='userName'
         required
        //  onChange={(e)=>{setAuthen(e.target.value)}}
         />
        <input
         type='password'
          placeholder='Enter your password' 
          name='password'
          />
       
       <div className='button'>
           
           <button type='submit'
           onClick={(e)=>{setAuthenUser(true);
        e.preventDefault()
        }}>
         <Link exact to='/'>Login</Link>

           </button>
           </div>
        
    </div>
    
    </>
)

}