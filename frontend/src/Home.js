 
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
       

<div> 
 
       {(function(){

       if(authen === true){

             return (
                 <div> 
             {/* <h2> Welcom you are Admin   </h2> */}

          </div>
          )

          }
          else if (authen === false){

            // return <h2> You must Login </h2>
          }
       })()}
</div>


       <div  className='homepage'> 
    
    <h1>Primary  dental <span >clinic</span> <br/>appointment 
    <br/> <span>(PDCA)</span> </h1> 
   
    </div><br/>
       </>
    )
}