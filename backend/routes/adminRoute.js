const express = require('express')
const adminRouter = express.Router()
adminRouter.use(express.json())
const appointment = require('../addNewAppointment.json')
const adminlogin = require('../AdminLogin.json')
const fs = require('fs')

adminRouter.get('/appointment', (req, res) => {
    console.log("object again")
    res.json(appointment)
})

adminRouter.post('/appointment', (req, res) => {

    const newAppointment = {

        id: appointment.length + 1,
        Clinic: req.body.Clinic,
        day: req.body.day,
        time: req.body.time
    }

    appointment.push(newAppointment)
    console.log(req.body)

    fs.writeFile('./addNewAppointment.json', JSON.stringify(appointment, null, 2), (err) => {

        if (err) throw err;
    })
    res.json(appointment)
})

adminRouter.delete('/appointment/:id', (req, res) => {

    console.log('id from back' + req.params.id)

    const found = appointment.find((item) => {
        return item.id === parseInt(req.params.id)
    })
    if (found) {
        const targetIndex = appointment.indexOf(found)
        appointment.splice(targetIndex, 1)
    }
    else {
        adminRouter.sendStatus(404)
    }
    fs.writeFile('./addNewAppointment.json', JSON.stringify(appointment, null, 2), (err) => {
        console.log(appointment)
        if (err) throw err
        res.send(appointment)
    })
})

adminRouter.put('/appointment/:id', (req, res) => {

    const found = appointment.find((item) => {
        return item.id === parseInt(req.params.id)
    })
    if (found) {
        const update = {

            id: found.id,
            Clinic: req.body.Clinic,
            day: req.body.day,
            time: req.body.time
        }

        const targetIndex = appointment.indexOf(found)
        appointment.splice(targetIndex, 1, update)
        res.send(appointment)
    }
    else {
        adminRouter.sendStatus(404)
    }

})

adminRouter.get('/adminlogin',(req,res)=>{
    res.json(adminlogin)
})

module.exports = adminRouter