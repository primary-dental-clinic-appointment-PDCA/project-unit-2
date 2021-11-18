const express = require('express')
const app = express()
const userRouter = require('./routes/userRoute')
const adminRouter = require('./routes/adminRoute')
var cors = require('cors')
const path = require('path')
const fs = require('fs')
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use("/patient",userRouter)
app.use("/admin",adminRouter)

if(fs.existsSync(path.join(__dirname, '../frontend/build'))) {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
    app.get('/*', function (req, res) {
      res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
    });
  }

app.listen(PORT)