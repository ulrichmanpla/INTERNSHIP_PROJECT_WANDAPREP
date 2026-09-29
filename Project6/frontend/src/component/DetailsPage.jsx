
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import './DetailPage.css'
export default function DetailsPage() {
  const [task, setTask] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const token = localStorage.getItem('token')

    async function getTask() {
      try {
        const response = await fetch('http://localhost:3000/auth/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })

        if (!response.ok) throw new Error(`HTTP ${response.status}`)

        const data = await response.json()
        const found = data.tasks.find(n => n.taskID === Number(id))
        setTask(found || null)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    getTask()
  }, [id])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  if (!task) return <p>Task not found</p>

  return (
    <div>
     <Navbar/>
       <div className='dpmain1'>
           
      <div className='backbtn'>
         <Link to='/dashboard' > 
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#111111"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>  
         </Link>
         </div>
      <h1 className='dptitle1'>{task.title}</h1>
      <p className='dptitle2'>{task.description}</p>
       <div className='dpstatus1'>
      <span className='dpstatus2' >Priority: {task.priority}</span>
      <span className='dpstatus2'>Status: {task.completed ? 'Done' : 'Not done'}</span>
       </div>
       </div>
      
    </div>
  )
}
