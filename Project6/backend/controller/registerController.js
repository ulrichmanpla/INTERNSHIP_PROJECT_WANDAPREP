const registerService = require('../service/registerServices')

async function register(req,res,next) {
    
    try{
       const user = await registerService.register(req.body)
       res.status(201).json({
        message:'user created successfully',
        user
       })
    }catch(err){
        next(err)
    }
}
async function login(req,res,next) {
    const {email, password}= req.body
    try{
        const login =  await registerService.login(email, password)
        if(!login){
           return res.status(400).json({
             message: "invalid email or password"
            })
        }
    res.status(200).json({
        message:"login successflly",
        login
    })
    }catch(err){
        next(err)
    }
}

async function getuserProfile(req, res, next) { 
       const userId = req.user.id
      try{
    const  userProfile  = await registerService.getuserProfile(userId)
    if(!userProfile){
        return res.status(404).json({
            message:"user does not exist"
        })
    }
     res.status(200).json(userProfile)
      }catch(err){
        next(err)
      }

}
module.exports={
    register,
    login,
    getuserProfile
}