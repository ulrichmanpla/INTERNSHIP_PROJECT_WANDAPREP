
function registervalidation(req,res, next){
    const {username, email, password} = req.body
    if(!username || !email || !password){
        return res.status(400).json({
            message: 'username, email and password are required'
        })
    }

    if(typeof email !== 'string'){
       return res.status(400).json({
        message:'Email must be a string'
       })
    }

    if (typeof password !=="string"){
        return res.status(400).json({
            message:'Password must be a string'
        })
    }
    if(password.length < 8){
        return res.status(400).json({
            message:'password must be at least 8 character'
        })
    }

    next()
}

module.exports= registervalidation