import React from 'react'
import {BrowserRouter as Router , Routes ,Route,Link} from 'react-router-dom'
import '../../index.css'
import './login.css'
import { useContext } from 'react'
import { UserContext } from '../Home/UserContext'
import { Button } from 'react-bootstrap';
export default function Login() {
    const {authenUser ,setAuthenUser} = useContext(UserContext)


return(
    <>
     
    <div className='Patientlogin'>
    <h1>Login page  for Patient</h1>

     
        <input 
        type='text'
        required
         placeholder='Enter your userName'
         name='userName'
          value='taget.value'
         
         />
        <input
         type='password'
          placeholder='Enter your password' 
          name='password'
          required
          />
       
       {/* <div className='button'> */}
           
       
            
         <Link exact to='/'>

              <Button  type='submit'
              onClick={(e)=>{ setAuthenUser(true);
             e.preventDefault() }}>
               Login </Button></Link> 

               
            
           {/* </div> */}
        
    </div>
    
    </>
)

}