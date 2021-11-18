import { useEffect, useState } from "react";
import axios from 'axios'
import './addNewAppointment.css'
import swal from 'sweetalert';

export default function AddNewClinic(){

    const [appointment ,setAppointment] = useState([])
    const [selectedClinic ,setSelectedClinic] = useState()
    const [selectedDay,setSelectedDay] = useState()
    const [selectedTime,setSelectedTime] = useState()
    
    
    
    
          useEffect(() => {
            axios.get("admin/appointment").then((res) => {
              console.log(res.data);
              console.log("GET")
              setAppointment(res.data);
            });
          }, []);
          
    // /////////ADD NEW APPOINTMENT/////////////////////////////////
    
        const handleClick =()=>{
    
           
          swal({
            title:'New appointment added',
            icon:'success'
          })
            axios.post('admin/appointment',{Clinic:selectedClinic , day:selectedDay ,time:selectedTime})
    
    
            .then((res)=>{
              console.log("POST")
              setAppointment(res.data)
    
              // setSelectedClinic("")
              // setSelectedDay("")
              // setSelectedTime("")
            })}
    
        ////////DELETE///////////////////////////////////////////////
            
        const handelDelete=(id)=>{
    
           
          swal({
            title:'Appointment deleted',
            icon:'success'
          })
          console.log(id)
    
          axios.delete(`admin/appointment/${id}`)
         .then((res)=>{
      console.log("DELETE")
      setAppointment(res.data)
    
    })}
    /////////EDIT/////////////////
    
    const handelEdit =(id)=>{
       
      swal({
        title:`Appointment updated in card ${id}`,
        icon:'success'
      })
      
      console.log(id)
    
      axios.put(`admin/appointment/${id}`,{Clinic:selectedClinic , day:selectedDay ,time:selectedTime})
    .then((res)=>{
      setAppointment(res.data)
    })
    }
    
     
    
    
        return(
            <>
             
            <div className='addNewAppointment'>
            <h1>add New Appointment</h1>
            
               <select  name='clinic' className='clinic' 
               onChange={ e=>setSelectedClinic(e.target.value)}>
    
                    <option value={selectedClinic}>Number of Clinic</option>
    
                    <option value='Clinic 1'>Clinic 1</option>
                    <option value='Clinic 2'>Clinic 2</option>
                    <option value='Clinic 3'>Clinic 3</option>
                    <option value='Clinic 4'>Clinic 4</option>
                    <option value='Clinic 5'>Clinic 5</option>
    
                </select>
    <br/>
    {/* 
    ........................ */}
            <select name='day' className='day'
            onChange={ x=>setSelectedDay(x.target.value)}>
    
                <option value={selectedDay}>Days</option>
    
                <option value='Sunday'>Sunday</option>
                <option value='Monday'>Monday</option>
                <option value='Tuseday'>Tuseday</option>
                <option value='Wednesday'>Wednesday</option>
                <option value='Thursday'>Thursday</option>
    
            </select>
    <br/>
            
            <select name='time'className='time'
            onChange={y=>setSelectedTime(y.target.value)}>
        
                <option value={selectedTime}>Times</option>
    
                <option value='8:00 AM'>8:00 AM</option>
                <option value='9:00 AM'>9:00 AM</option>
                <option value='10:00 AM'>10:00 AM</option>
                <option value='11:00 AM'>11:00 AM</option>
                <option value='12:00 PM'>12:00 PM</option>
                <option value='1:00 PM'>1:00 PM</option>
                <option value='2:00 PM'>2:00 PM</option>
                <option value='3:00 PM'>3:00 PM</option>
            </select>
    <br/>
           <button className='postBTN' onClick={handleClick}>Add</button>
    
    
            </div>
    
            <div className='container'>
       
          {appointment.map((get)=>{
             
             return <div className='cards'>
    
              <h3>{get.Clinic}</h3>
               <h4>{get.day}</h4>
               <h6>{get.time}</h6>
    
             <div>
    <button onClick={()=>handelEdit(get.id)} className='Edit'>Edit</button>
    
    <button onClick={()=>handelDelete(get.id)} className='Delete'>Delete</button>
             </div>
            
              </div>
     })}
    
            </div>
            </>
        )
         
    }