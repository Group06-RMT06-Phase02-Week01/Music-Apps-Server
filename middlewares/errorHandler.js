
module.exports = (err, req, res, next) => {
   // message error ku jadiin array semua ya biar seragam
  if(err){
    if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeValidationError') {
      let arrErrors = []
      for (let i = 0; i < err.errors.length; i++) {
          arrErrors.push( err.errors[i].message)
      }
    res.status(400).json({message: arrErrors})
    }
    else {
      if(!err.status){
        //ini untuk handle key error dari Quote Garden API
        err['status'] = err.statusCode
      }
      res.status(err.status).json({message : [err.message]})
    }
  }
  
  else {    
    res.status(500).json({message : [err.message]})
  
  }
}


