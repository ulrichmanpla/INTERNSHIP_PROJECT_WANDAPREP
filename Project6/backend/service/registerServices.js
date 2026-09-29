
const pool = require('../config/database')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
async function register(userData) {
    const {username, email, password} = userData
    
    const hashedpassword =  await bcrypt.hash(password,10)
    const [data] = await pool.query(`
          INSERT INTO users (username, email, password)
          VALUES(?,?,?)
        `,[username, email, hashedpassword])
      
      return {
        id: data.insertId,
        username,
        email
      } 
}

async function  login(email, password){
      const [data] = await  pool.query(`
        SELECT id, username, email, password FROM users
        WHERE email = ?
        `,[email])
       if(data.length === 0){
        return null
       }
        const user = data[0]
      const isMatch = await bcrypt.compare(password, user.password)
      if(!isMatch){
        return null
      }
      const token = jwt.sign({id: user.id, username: user.username, email:user.email}, process.env.JWT_SECRET)
    return {
       username: user.username,
        email: user.email,
       token
    }
}
async function getuserProfile(userId) {
  const [rows] = await  pool.query(`
       SELECT 
       u.id,
       u.username,
       u.email,
       t.id AS taskID,
       t.title,
       t.description,
       t.priority,
       t.created_at,
       t.completed
       FROM users AS u
      LEFT JOIN tasks AS t ON u.id = t.user_id
       WHERE u.id = ? 
        ORDER BY t.id DESC
    `,[userId])
    if(rows.length === 0){
      return null
    }
    const users = {
      id: rows[0].id,
      username: rows[0].username,
      email:rows[0].email,
      tasks:[]
    }
    for( const user  of rows){
              if(user.taskID === null) continue

      users.tasks.push({
         taskID: user.taskID,
         title:user.title,
         description: user.description,
         priority: user.priority,
         date: user.created_at,
         completed:user.completed

      })
  }
   return  users
}
module.exports={
  register,
  login,
  getuserProfile
}