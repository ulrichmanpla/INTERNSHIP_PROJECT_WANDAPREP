
const express = require('express')
const router = express.Router()
const authentication = require('../middleware/authmiddlware')
const {createTask,getTask,deleteTask,updateCheck}=require('../controller/taskController')

router.post('/create',authentication,createTask)
router.get('/tasks',authentication,getTask)
router.delete('/:id',authentication,deleteTask)
router.patch('/:id',authentication,updateCheck)

module.exports = router