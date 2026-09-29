const jwt = require('jsonwebtoken')
function authentication(req,res,next){
   const authHeader = req.headers['authorization']
   if(!authHeader){
    return res.status(404).json({
        message:"token is require"
    })
   }
   const token = authHeader && authHeader.split(' ')[1]
   try{
         const decode = jwt.verify(token, process.env.JWT_SECRET)
         req.user = decode
   }catch(err){
    console.log("envilid token", err.message)
   }
   next()
}

module.exports = authentication