import react from "react";
import { useEffect, useState } from "react";
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import './login.css'
import swal from 'sweetalert';
import {myAppointment} from "../../Reducers/PatientAppointment";
import { useNavigate } from 'react-router-dom';
// import store from './store';



export default function Display(){

    const [appointment ,setAppointment] = useState([])
    
    const dispatch = useDispatch()

    const navigate=useNavigate()


    const state = useSelector((state)=>{

    return{
        Mylist:state.PatientAppointment.patientPage
    }})

    useEffect(()=>{

        axios.get('admin/appointment')
        .then((res)=>{
          console.log(res.data)
          setAppointment(res.data)
        })
        },[])


        const ADD=(id,item)=>{

          if(state.Mylist.some(i=>i.id === id)){

            swal({
              title:'You are already added',
               icon:'error'
              })}

          else{
             
            swal( {
              title:'Successfully added',
              icon:'success'
            })

          dispatch(myAppointment(item))
          navigate('/MyAppointment')
        }
        }

        
    return(
        <>
        <div className='myBigcontainer'>
   
   {console.log(state.Mylist)}

   {appointment.map((get)=>{
      
      return <div className='myCard'>

        <h3>{get.Clinic}</h3>
        <h4>{get.day}</h4>
        <h6>{get.time}</h6>
        
        <button className='ADDbtn'
        onClick={()=>{ADD(get.id,get)}}>
           Add</button>


       </div>
})}

     </div>
        </>
    )
}