import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import './Card.css'

export default function FullCard ({data}){

const {clinic} =useParams();

useEffect(()=>{
    console.log(clinic)
})
    return(
        <>
        {/* className [full] is hole screen  */}
        <section className="full">

{/*  className [con]  is the inner card*/}
            <div className="children">

 
    {data.filter(card => card.clinic === clinic)
    .map((card ,index)=>(

        <div key={index} className="fullCard">

               
                
               <h1> Number Of Clinic: <span>{card.clinic}.</span> </h1> 
                
                
               
                <br/>
                <h1> Name Of Doctor :<span>{card.doctrName}.</span> </h1>
                <br/>
                <h1> Number Of Floor :<span>{card.floor}.</span> </h1>
        </div>

    ))}
            </div>

        </section>
        
        
        </>
    )
}