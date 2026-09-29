
const taskSerivce = require('../service/taskService')
async function createTask(req,res,next) {
    const userId = req.user.id
    try{
        const task = await taskSerivce.createTask(userId, req.body)
        res.status(201).json({
            message: "task created successfully",
            task
        })
    }catch(err){
       next(err) 
    }
}

async function getTask(req,res, next) {
    try{
        console.log(req.user)
     const userId= req.user.id
     const task = await taskSerivce.getTask(userId)
     res.status(200).json({
        message: " successfully get user task ",
        task
     })
    }catch(err){
        next(err)
    }
}

async function deleteTask(req,res, next){
     const userId = req.user.id
     const taskId =  req.params.id
     try{
      const deletetask = await taskSerivce.deleteTask(taskId, userId)
      if(!deletetask){
        return res.status(404).json({
            message:"task does not exist to be deleted"
        })
      }
      res.status(200).json({
        message: "task deleted successfully"
      })
     }catch(err){
        next(err)
     }
}

async function updateCheck(req,res,next) {
    const userid = req.user.id
    const taskid = req.params.id
    console.log(userid, taskid)
    try{
      const checkupdate = await taskSerivce.updateCheck(taskid, userid)
      if(!checkupdate){
        return res.status(404).json({
            message:"task check not found"
        })
      }
      res.status(200).json({
        message:"task  check was updated sucessfully"
      })
    }catch(err){
        next(err)
    }
}
module.exports= {
    createTask,
    getTask,
    deleteTask,
    updateCheck
}