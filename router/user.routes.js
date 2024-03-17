
const express = require('express')
const{home , register,login} = require('../controllers/user.controllers.js')
const{verifyregister,verifylogin} = require('../middleware/user.mw.js')
const routes = express.Router();

routes.get('/',home)
routes.post('/register',[verifyregister],register)
routes.post('/login',[verifylogin],login)

module.exports = routes
