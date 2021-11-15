import React from "react";

import { useDispatch ,useSelector } from "react-redux";
import { remove } from "../../Reducer/PatientAppointment";


export default function MyAppointment(){

    const dispatch = useDispatch()

    const state = useSelector((state)=>{
       return{ 
           myList:state.PatientAppointment.patientPage,
        }
    })

    return(
        <>

        <div className="mycontainer"> 

        {state.myList.map((elm)=>(

         <div key={elm.id} className="card"> 

             <h3>{elm.Clinic}</h3>  
             <h3>{elm.day}</h3> 
             <h4>{elm.time}</h4> 

<button onClick={()=>(dispatch(remove(elm)))}
 className='Delete'>Delete</button>
 
         </div>   
        ))}
        </div>
        </>
    )
}