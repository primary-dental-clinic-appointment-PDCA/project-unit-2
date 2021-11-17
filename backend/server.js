const express = require('express')
const app = express()
const userRouter = require('./routes/userRoute')
const adminRouter = require('./routes/adminRoute')
var cors = require('cors')

app.use(cors())
app.use("/patient",userRouter)
app.use("/admin",adminRouter)

const PORT = process.env.PORT || 3001
app.listen(PORT)