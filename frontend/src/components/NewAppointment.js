import React from 'react'
import { useEffect, useState } from "react"
import { useDispatch} from "react-redux"
import axios from 'axios'
import {addAppointment} from '../reducers/appointment'
import {useNavigate} from 'react-router-dom'

export default function NewAppointment() {

    const dispatch = useDispatch()
    const [appointment ,setAppointment] = useState([])
    let navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:3001/patient/appointments')
        .then((res)=>{
          console.log(res.data)
          setAppointment(res.data)
        })
        },[])

        function ADD(ele){
          dispatch(addAppointment(ele))
          navigate("/MyAppointment") 
        }
    return (
        <div>
           {appointment.map((ele)=>{
            return(
                <div>
            <h3>{ele.Clinic}</h3>
            <p>{ele.day}</p>
            <p>{ele.time}</p>
            <button onClick={(e)=>{ADD(ele)}}>ADD</button>
            </div>
            )
        })} 
        </div>
    )
}
