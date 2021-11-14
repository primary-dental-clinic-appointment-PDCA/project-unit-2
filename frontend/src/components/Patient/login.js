import React from 'react'

import './login.css'

export default function login() {

return(
    <>
     
    <div className='Patientlogin'>
<h1>Login page  for Patient</h1>

     
        <input type='text' placeholder='Enter your userName' />
        <input type='password' placeholder='Enter your password' />
       
       <div className='button'>Login</div>
        
    </div>
    
    </>
)

}