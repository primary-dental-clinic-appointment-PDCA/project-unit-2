import React from 'react'
import {BrowserRouter as Router , Routes ,Route,Link} from 'react-router-dom'
import '../../index.css'
import './login.css'
import { useContext , useState } from 'react'
import { UserContext } from '../Home/UserContext'
import { Button } from 'react-bootstrap';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const {authenUser ,setAuthenUser} = useContext(UserContext)


    let navigate=useNavigate();
    const [name ,setName] =useState('');
    const [pass ,setPass] =useState(''); 
   //  Check if input in name and password is null
   const onChangeHandler =(fieldName ,value)=>{
       if(fieldName==='name'){
         setName(value)
       }
       else if(fieldName ==='pass'){
         setPass(value)
       }
     }
     const onSubmitHandler = (e)=>{
       e.preventDefault();
       if(name.trim() === '' || pass.trim() ===''){
         swal({
           title: "required both field",
         })
       }
       else
       {
         swal({
           title:'Welcome '+ name,
         })
         setAuthenUser(true)
             navigate('/')
             setName('')
             setPass('')
     }
     }
   return(
       <>
       <form className='Patientlogin'
       onSubmit={(e)=>{onSubmitHandler(e)}}>
       <h1>Login</h1>
           <input
           type='text'
           required
            placeholder='Enter your userName'
            name='userName'
            onChange={(e)=>{onChangeHandler('name',e.target.value)}}
            />
           <input
            type='password'
             placeholder='Enter your password'
             name='password'
             required
             onChange={(e)=>{onChangeHandler('pass',e.target.value)}}
             />
          <input  className='Submit' type='submit' onClick={onSubmitHandler}/>
       </form>
    
    
    </>
)

}