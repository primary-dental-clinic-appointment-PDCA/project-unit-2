import React from "react";
import Card from "./Card";

import './Card.css'


export default function Hero ({data}){



    return(
<>

            <section className="BIG"> 

            <div className="con"> 

            <Card data={data}/>
            
            </div>
            
            </section>
 
</>
  
            
    )
}