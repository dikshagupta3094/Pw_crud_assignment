require('dotenv').config()
const express = require('express')
const connecttodb = require('./db/connection.db.js')
const userRoute = require('./router/user.routes.js')
const app = express()
connecttodb()
app.use(express.json())
app.use('/',userRoute)
module.exports = app