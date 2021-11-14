const express =require('express')
const cors =require('cors');
const appointment=require('./addNewAppointment.json')


const app =express()
const PORT=8080;
const fs=require('fs')








app.use(cors({origin:'http://localhost:8080'}))

app.use(express.json())

//Display all data 
app.get('/appointment',(req,res)=>{
    res.json(appointment)
})

// /////////////////////////////////////////////
//Add New Appointment 

app.post('/appointment',(req,res)=>{

    const newAppointment = {

        id:appointment.length + 1 ,
        Clinic:req.body.Clinic,
        day:req.body.day,
        time:req.body.time
    }

    appointment.push(newAppointment)
    console.log(req.body)

    fs.writeFile('./addNewAppointment.json',JSON.stringify(appointment,null,2),(err)=>{

        if(err) throw err;
    })
    res.json(appointment)
})

////////////////////////
//Delete




// app.listen(4000,() => console.log('server is up an running ...'))

app.listen(PORT,()=>{
    console.log('connected on= http://localhost:8080/appointment')
})