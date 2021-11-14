  import {BrowserRouter as Router , Routes ,Route,Link} from 'react-router-dom'

import './Admin.css'
 
 


export default function loginAdmin(){

    return(

        <>
 
        <div className='BigLogin'> 

        <div className='login'>
    
    <h1>Login for Admin </h1>

    <input type='text' placeholder='Enter your userName' />
    <input type='password' placeholder='Enter your password' />
    
    <div className='button'> 
    
         
       </div>
      
     </div>
     </div>
        </>
    )
}