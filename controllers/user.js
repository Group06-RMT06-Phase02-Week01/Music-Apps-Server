const {User} = require('../models')
const helpbcrypt = require('../helpers/bcrypt')
const {generateToken} = require('../helpers/jwt')

const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);


class UserController {
  static register (req,res){
    res.send(req.body)
    const newUser = {
      email: req.body.email,
      password: req.body.password
    }
    console.log(newUser)
    User.create(newUser)
      .then (data=>{
        res.status(201).json({id: data.id,email: data.email})
      })
      .catch (err=>{
  
        res.status(500).json(err.message)
      })

  }

  static login(req,res){
    User.findOne({where: {email:req.body.email}})
      .then (data=>{
        if(!data){
          res.status(401).json({message: `Account not Found`})
        }
        else if(helpbcrypt.compare(req.body.password,data.password)){
          const access_token = generateToken({id: data.id,email: data.email})
          res.status(200).json({access_token})
        }
        else{
            res.status(401).json({message: `Invalid email/password`})
          }
      })
      .catch (err=>{
        
        res.status(500).json(err.message)
      })
  }

  static googleLogin (req, res, next) {
    client.verifyIdToken({
        idToken: req.body.googleToken,
        audience: process.env.GOOGLE_CLIENT_ID
    })
    .then(ticket => {
        const payload = ticket.getPayload()
        return User.findOne({ where: { email: payload.email }})
    })
    .then(user => {
        if (user) { 
            return user
        } else {
            return User.create({ email: payload.email, password: 'random' })
        }
    })
    .then(user => {
        const access_token = generateToken({ email:user.email, id: user.id })
        res.status(200).json({access_token})
    })
    .catch(error => {
        console.log(error)
        next(error)
    })
}


}

module.exports = UserController