
const pool = require('../config/database')



async function  createTask(userId,taskData){
     const {title, description,date,priority}=taskData
     const [data] = await pool.query(`
           INSERT INTO tasks (user_id, title, description,created_at, priority)
           VALUES(?,?,?,?,?)
        `,[userId, title,description,date,priority])
      return data
}

async function  getTask(userId) {
    const [data]= await pool.query(`
         SELECT title, description,priority,created_at FROM tasks
         WHERE user_id =? 

        `,[userId])
    if(data.length === 0){
        return null
    }

    return data
}

async function deleteTask(taskId, userId) {
    const [data] = await pool.query(`
        DELETE FROM tasks WHERE id = ? AND user_id = ?
        `,[taskId, userId])

     if( data.affectedRows === 0){
        return false
     }
     return true
}

async function updateCheck(taskid, userid) {
    const [data] = await pool.query(`
           UPDATE tasks SET completed = NOT completed WHERE id = ? AND user_id =?
        `,[taskid, userid])
     if(data.affectedRows === 0){
        return false
     }
     return true
}
module.exports = {
    createTask,
    getTask,
    deleteTask,
   updateCheck
}