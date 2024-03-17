const User = require("../model/user.model");

exports.home =(req, res) => {
    res.send("Home page");
  };

exports.register = async(req, res) => {
     const user_body = req.body;

     const user_obj = {
      name:user_body.name,
      email:user_body.email,
      password:user_body.password
     }

     try {
        const user = await User.create(user_obj)
        res.status(200).json({
         msg:"user registered successfully"
        })
     } catch (error) {
        console.log("Error occured", error);
        res.status(400).json({
         message:"Some error occured"
        })
     }
  };

  exports.login = async(req,res)=>{
     const req_body = await User.findOne({email:req.body.email})

     if(req_body==null){
      return res.status(500).json({
         msg:"No account associated with this email"
      })
  }

  if(req.body.password!=req_body.password){
     return res.status(500).json({
      msg:"Password is wrong"
     })
  }

  res.status(200).json({
   msg:"Login Successfully"
  })

}