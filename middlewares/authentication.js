
const { verifyToken } = require("../helpers/jwt")
const {User} = require('../models')

module.exports = async (req,res,next) => {
  try {
    const access_token = req.headers.access_token
    if(!access_token){
      res.status(401).json({message: `Login First`})
    }
    else{
      const decoded = verifyToken(access_token)
      let id = decoded.id
      req.loginUser = decoded
      
      let data = await User.findOne({where: {id: id}})
      // console.log(data)
      if (data) {
        next()
      }
      else {
        res.status(401).json({message: `Account not found`})
      
      }
    }

  }
  catch(error){
    console.log(error)
    if (!error) {
      res.status(401).json({message: `Authentication Failed,You need to Log In first`})

    }
    else {
      res.status(500).json(err.message)
    }
  }
  


}