const express = require('express')
const app = express()
const PORT = 8000 //will be stored in .env

require('./config/mongoose.config')

require('dotenv').config() //will allow us to store PORT variable in .env file

app.use(express.json(), express.urlencoded({ extended:true })) //json middleware

require('./routes/user.routes')(app) //user routes


app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`))