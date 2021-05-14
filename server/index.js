const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')



app.use(express.json())
app.use(cors())



mongoose
    .connect(process.env.MONGODB_URI || 'mongodb+srv://admin123:admin123@cluster0.hhdrc.mongodb.net/Devlane?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(x => console.log(`Connected to ${x.connections[0].name}`))
    .catch(() => console.error("Error connecting to Mongo"))




app.use('/', require('./routes/routes.js'))


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Listening to port ${PORT}`))