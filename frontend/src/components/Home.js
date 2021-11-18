 
 import '../index'
 import {UserContext} from './Home/UserContext'
 import { useContext } from 'react';
 import './Home/homePage.css'
 
 export default function Home(){
     
    const {authen, setAuthen} = useContext(UserContext);
 
     return(
        <>
        
 
 
 
 
 <div  className='homepage'>

    <h1> Primary
     dental  <span className='H'> <br/>clinic </span> 

     appointment  <span className='H'> <br/>(PDCA)</span></h1>

    </div>

          
        
        </>
     )
 }