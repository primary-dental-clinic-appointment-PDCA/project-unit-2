import react from "react";
import { useEffect, useState } from "react";
import axios from 'axios'
import {myAppointment} from './Reducer/PatientAppointment'

import {useSelector,useDispatch} from 'react-redux'
import store from "../../store";



export default function Display(){

    const [appointment ,setAppointment] = useState([])


    const dispatch = useDispatch()
    const state = useSelector((state)=>{

    return{
        Mylist:state.PatientAppointment.patientPage
    }
})

    useEffect(()=>{

        axios.get('http://localhost:8080/appointment')
        .then((res)=>{
          console.log(res.data)
          setAppointment(res.data)
        })
        },[])
    return(
        <>
        

        <div className='container'>
   
   {appointment.map((get)=>{
      
      return <div className='card'>

        <h3>{get.Clinic}</h3>
        <h4>{get.day}</h4>
        <h6>{get.time}</h6>
        <button className='ADDbtn'>Add</button>


       </div>
})}

     </div>
        </>
    )
}