const express = require('express')
const userRouter = express.Router()
const appointments = require('../Appointments.json')
const userappointments = require('../userAppointments.json')
const fs = require('fs')
const { log } = require('console')

userRouter.get('/appointments', function(req, res){
    res.json(appointments)
})

userRouter.post('/add', function(req, res){
    console.log(req)
    // console.log(newAppointment)
    let newAppointment = {
        // id: appointments.length+1,
        // clinic: req.body.clinic,
        // day: req.body.day,
        // time: req.body.time
    }
    // appointments.push(newAppointment)
    // fs.writeFile('../userAppointments.json',JSON.stringify(userappointments,null,2),(err)=>{
    //     if(err) throw err;
    // })
    // res.json(appointments)
})

userRouter.delete('/deleteAppointment/:id', function(req,res){
 let found = userappointments.find(function(items){
     return items.id === parseInt(req.params.id)
 })
 if(found){
     let i = userappointments.indexOf(found)
     let deletedAppointment = userappointments.splice(i , 1)
     res.send(deletedAppointment)
 }
else {res.sendStatus(404)}
})

module.exports = userRouter