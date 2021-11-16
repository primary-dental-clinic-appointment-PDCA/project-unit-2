import React, { useEffect, useState } from 'react';

export default function Time(){

    const [theTime, setTheTime]=useState();
    const date =useState(new Date().toLocaleDateString())
    
useEffect(()=>{

     setInterval(()=> setTheTime(new Date().toLocaleTimeString()))
    return {
       
    }
        },1000)

    return(
    <>

<h2 className='time'>   [{date}] {theTime} </h2>
    </>
    );
}