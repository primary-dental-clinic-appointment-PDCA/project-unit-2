  import {BrowserRouter as Router , Routes ,Route,Link} from 'react-router-dom'
import './Admin.css'
import { useContext, useState } from 'react'
import { UserContext } from '../Home/UserContext'
import { Button } from 'react-bootstrap';

import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

export default function LoginAdmin(){

const {authen ,setAuthen} = useContext(UserContext)

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
        setAuthen(true)

        navigate('/')
        setName('')
        setPass('')
}
}

    return(

        <>
 
        <div className='BigLogin'> 

        <form className='login' onSubmit={(e)=>{onSubmitHandler(e)}}>
    
    <h1>Login for Admin </h1>

    <input
     type='text'
      placeholder='Enter your userName'
     
     value={name}
     onChange={(e)=>{onChangeHandler('name',e.target.value)}}
     required
     />

    <input
      type='password'
      placeholder='Enter your password'
       
      value={pass}
      onChange={(e)=>{onChangeHandler('pass',e.target.value)}}
    
      required
      />
    
       
    
 
      
          
          
             <input type='submit' onClick={onSubmitHandler}/> 
       
         
        
       
          
       
       </form>
      
     </div>
      
        </>
    )
}