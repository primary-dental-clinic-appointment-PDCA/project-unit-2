 
 import './index.css'
import {UserContext} from './components/Home/UserContext'
import { useContext } from 'react';
import './components/Home/homePage.css'
import {BrowserRouter as Router , Routes ,Route,Link} from 'react-router-dom'
import { useState } from 'react'
 

export default function Home(){
    
   const {authen, setAuthen} = useContext(UserContext);

    return(
       <>
       

 

       <div  className='homepage'> 
    
    <h1>Primary  dental <span >clinic</span> <br/>appointment 
    <br/> <span>(PDCA)</span> </h1> 
   
    </div><br/>
       </>
    )
}