import React from "react";
import {Link} from 'react-router-dom'

import './Card.css'

export default function Card({data}){


    return(
        <>

          

         {data.map((card,index)=>(


           <div key ={index}  className="child"> 

           <h1>{card.clinic}</h1>

            <Link to={`/Clinics/${card.clinic}`}> View More</Link>
           
           </div>
          
         
         ))}
        

        
        </>
    )
}