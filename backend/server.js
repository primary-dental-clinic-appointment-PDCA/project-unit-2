const express = require('express')
const app = express()
const userRouter = require('./routes/userRoute')
var cors = require('cors')

app.use(cors())
app.use("/patient",userRouter)

const PORT = process.env.PORT || 3001
app.listen(PORT)