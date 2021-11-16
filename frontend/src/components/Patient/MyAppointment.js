import React from "react";
import './login.css'
import { useDispatch ,useSelector } from "react-redux";
import { remove } from "../../Reducer/PatientAppointment";
import swal from 'sweetalert';

import {useNavigate} from 'react-router-dom'

export default function MyAppointment(){

    const dispatch = useDispatch()
    
    const navigate=useNavigate()

    const state = useSelector((state)=>{
        
       return{ 
           
           myList:state.PatientAppointment.patientPage,
        }
    })

    const Remove=(item)=>{

         
        swal({
            title:'The Appointment is delete',
            icon:"error"
        })
        dispatch(remove(item))
    }

    return(
        <>

        <div className="myBigcontainer"> 

        {state.myList.map((elm)=>(

         <div key={elm.id} className="myCard"> 

             <h3>{elm.Clinic}</h3>  
             <h3>{elm.day}</h3> 
             <h4>{elm.time}</h4> 

      <button onClick={()=>{Remove(elm)}}
      className='Delete'>Delete</button>
 
         </div>   
        ))}
        </div>
        </>
    )
}