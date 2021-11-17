 
 import '../index'
 import {UserContext} from './Home/UserContext'
 import { useContext } from 'react';
 import './Home/homePage.css'
 
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
    <h1>Primary dental clinic <br/>appointment (PDCA)</h1>
    </div>
        </>
     )
 }