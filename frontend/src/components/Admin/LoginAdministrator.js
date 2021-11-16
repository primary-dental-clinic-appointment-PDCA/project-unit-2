  import {BrowserRouter as Router , Routes ,Route,Link} from 'react-router-dom'

import './Admin.css'
 import '../../index.css'
import { useContext } from 'react'
import { UserContext } from '../Home/UserContext'
import { Button } from 'react-bootstrap';
 


export default function LoginAdmin(){

const {authen ,setAuthen} = useContext(UserContext)


    return(

        <>
 
        <div className='BigLogin'> 

        <div className='login'>
    
    <h1>Login for Admin </h1>

    <input
     type='text'
     placeholder='Enter your userName'
     name="userName"
     required
    
     />

    <input
     type='password'
      placeholder='Enter your password'
      name='password'
      required
      />
    
      <Link  exact to='/'>
    
        <Button type='submit'
          onClick={(e)=>{setAuthen(true)
          e.preventDefault()}} >
         
           Log in </Button>
      
       </Link>

       
       </div>
      
     </div>
      
        </>
    )
}