
function errorHandler(err,req,res,next){
     console.log(err)
     if(err.code === 'ER_DUP_ENTRY'){
      return res.status(409).json({message:'Duplicate entry'})
     }

     if(err.code === "ER_NO_SUCH_TABLE"){
      return res.status(500).json({message:'database table does not exist'})
     }
     res.status(500).json({
        message:'Internal server error'
     })
}

module.exports = errorHandler