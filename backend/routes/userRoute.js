const express = require('express')
const userRouter = express.Router()
userRouter.use(express.json())
const appointments = require('../Appointments.json')
const userappointments = require('../userAppointments.json')
const fs = require('fs')


userRouter.get('/appointments', function (req, res) {
    res.json(appointments)
})

userRouter.delete('/deleteAppointment/:id', function (req, res) {
    let found = userappointments.find(function (items) {
        return items.id === parseInt(req.params.id)
    })
    if (found) {
        let i = userappointments.indexOf(found)
        let deletedAppointment = userappointments.splice(i, 1)
        res.send(deletedAppointment)
    }
    else { res.sendStatus(404) }
})

module.exports = userRouter