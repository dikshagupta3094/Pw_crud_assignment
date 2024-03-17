
const user_model = require('../model/user.model.js')
const verifyregister = (req,res,next)=>{
  try{
    if(!req.body.name || !req.body.email || !req.body.password){
        res.status(500).json({
            msg:"all inputs fields are neccessary"
        })
    }
    next()
  }
  catch(err){
    res.status(500).json({
        msg:"Error while validating the data"
    })
  }
}

const verifylogin = (req,res,next)=>{
    try {
       if(!req.body.email||!req.body.email) {
        res.status(500).json({
          msg:"all inputs field are required to login"
        })
       }
        next();
    } catch (error) {
      res.status(500).json({
        msg:"Error while validating the data"
      })
    }
}

module.exports = {
    verifyregister,
    verifylogin
}