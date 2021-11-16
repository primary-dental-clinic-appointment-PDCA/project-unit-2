const express =require('express')
const cors =require('cors');
const appointment=require('./addNewAppointment.json')
const adminlogin =require('./AdminLogin.json')


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
        time:req.body.time,
        doctorName:req.body.time,
        floor:req.body.floor
    }

    appointment.push(newAppointment)
    console.log(req.body)

    fs.writeFile('./addNewAppointment.json',JSON.stringify(appointment,null,2),(err)=>{

        if(err) throw err;
    })
    res.json(appointment)
})

////////////////////////
//Delete appointment

app.delete('/appointment/:id' ,(req,res)=>{

    console.log('id from back' +req.params.id)

    const found = appointment.find((item)=>{
        return item.id === parseInt(req.params.id)
    })
    if(found){
        const targetIndex = appointment.indexOf(found)
        appointment.splice(targetIndex,1)
    }
    else{
        app.sendStatus(404)
    }
    fs.writeFile('./addNewAppointment.json',JSON.stringify(appointment,null,2),(err)=>{
        console.log(appointment)
        if(err) throw err
        res.send(appointment)
    })
})
///////////EDIT into appointment///////////////////////

app.put('/appointment/:id',(req,res)=>{

const found = appointment.find((item)=>{
    return item.id === parseInt(req.params.id)
})
if (found){
    const update = {

        id:found.id,
        Clinic:req.body.Clinic,
        day:req.body.day,
        time:req.body.time   
     }

     const targetIndex=appointment.indexOf(found)
     appointment.splice(targetIndex , 1 ,update)
     res.send(appointment)
}
else{
    app.sendStatus(404)
}

})


/////////////////////////////////
app.get('/adminlogin',(req,res)=>{
    res.json(adminlogin)
})

 

app.listen(PORT,()=>{
    console.log('connected on= http://localhost:8080/appointment')
})