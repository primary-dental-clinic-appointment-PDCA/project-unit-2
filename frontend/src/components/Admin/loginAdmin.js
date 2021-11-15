  import {BrowserRouter as Router , Routes ,Route,Link} from 'react-router-dom'

import './Admin.css'
 import '../../index.css'
import { useContext } from 'react'
import { UserContext } from '../HomePage/UserContext'
 
 


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
     onChange={(e)=>{setAuthen(e.target.value)}}
     />

    <input
     type='password'
      placeholder='Enter your password'
      name='password'
      required
      />
    
    <div className='button'> 
    
        {/* <button type='submit'
          onClick={(e)=>{setAuthen(true)
          e.preventDefault()}
      }>
        {console.log('kkkk')} */}

     <Link exact to='/'>Login</Link>
        {/* </button> */}
       </div>
      
     </div>
     </div>
        </>
    )
}