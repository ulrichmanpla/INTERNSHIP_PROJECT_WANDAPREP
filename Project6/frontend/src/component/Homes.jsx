
import { useEffect, useState } from 'react'
import './Home.css'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
export default function Homes() {
 const [task, setTask] = useState([])
 const [name, setName] = useState('')
  useEffect(()=>{
     const token = localStorage.getItem('token')
     async function getTask() {
         const response = await fetch('http://localhost:3000/auth/profile',{
          method:'GET',
          headers:{
            'Content-Type':'application/json',
            'authorization':`Bearer ${token}`
          },
         })
         const data  = await response.json()
         console.log(data)
         console.log('this is the user taks',data.tasks)
         setTask(data.tasks)
         setName(data.username)
     }
     getTask()
  }, [])
  
  const  pending = task.filter(n => !n.completed)
  const complete= task.filter(n => n.completed)

  const total = task.length
  const done = task.filter(n=> n.completed).length
  const percentage = total === 0? 0 : Math.ceil((done/total)*100)
   
  return (
    <>
     <Navbar/>
     <section className='s1'>
      <div className='homec1'>
        <div className="homehead1">
        <p className="hometext1">Welcome , {name}!</p>
        <p className="hometext2">You have {pending.length} active tasks to complete today</p>
          </div>
          <Link to='/dashboard' className="homeview">
             View Tasks
          </Link>
      </div>
     <div className="homec2">
         <div className="hdivc1" id='hid1'>
            <div className="hsvg1">
         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M441-82Q287-97 184-211T81-480q0-155 103-269t257-129v120q-104 14-172 93t-68 185q0 106 68 185t172 93v120Zm80 0v-120q94-12 159-78t79-160h120q-14 143-114.5 243.5T521-82Zm238-438q-14-94-79-160t-159-78v-120q143 14 243.5 114.5T879-520H759Z"/></svg>
            </div>
            <div className="htext1">
                <p className="hcount1">
                  Total Task
                </p>
                <p className="htext2">
                  {task.length}
                </p>
            </div>
         </div>
         <div className="hdivc1" id='hid2'>
            <div className="hsvg1">
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
            </div>
            <div className="htext1">
                <p className="hcount1">
                        Active
                </p>
                <p className="htext2">
                  {pending.length}
                </p>
            </div>
         </div>
         <div className="hdivc1" id='hid3'>
            <div className="hsvg1">
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z"/></svg>
            </div>
            <div className="htext1">
                <p className="hcount1">
                completed
                </p>
                <p className="htext2">
                  {complete.length}
                </p>
            </div>
         </div>
         <div className="hdivc1" id='hid4'>
            <div className="hsvg1">
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M621.5-338.5Q680-397 680-480t-58.5-141.5Q563-680 480-680t-141.5 58.5Q280-563 280-480t58.5 141.5Q397-280 480-280t141.5-58.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z"/></svg>
            </div>
            <div className="htext1">
                <p className="hcount1">
                 completion
                </p>
                <p className="htext2">
                  {percentage}%                </p>
            </div>
         </div>
     </div>
      <div className="homec3">
         <div className="homec31">
               <h3>Daily Pogress</h3>
          <div className="tc31">
            <p className='hsub1'>Today's Completion</p> 
            <p className='hsub1'>{percentage}%</p>
          </div>
           <div className='progressbar'>
              <div className='progression' style={{width:`${percentage}%`}}/>
           </div>
             <div className="threecard">
                 <div className='hdivc3'>
                    <div className='hct1' id='h3c1'>
                      {task.length}
                    </div >
                    <p className='htc3' id='h3t1'>Total</p>
                 </div>
                 <div className='hdivc3'>
                    <div className='hct1' id='h3c2'>
                      {pending.length}
                    </div >
                    <p className='htc3' id='h3t2'>Pending</p>
                 </div><div className='hdivc3'>
                    <div className='hct1' id='h3c3'>
                      {complete.length}
                    </div >
                    <p className='htc3' id='h3t3'>Done</p>
                 </div>
             </div>
         </div>
         <div className="homec32">
           <h3>Recent Task</h3>
           <div>
             {
              task.length == 0 ?(<p>No Daily task yet</p>):(
                 <div>
                    {
                      task.map(n=> <div>
                          <div className='hsmallcard'>
                             <div className="hsvg4">
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={n.completed ? '#22c55e' : '#808080'}><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z"/></svg>
                             </div>
                             <div>
                             <h4>{n.title}</h4>
                              <p>{n.date}</p>
                             </div>
                          </div>
                      </div>)
                    }
                 </div>
              )
             }
           </div>
         </div>
      </div>
     </section>
    </>
  )
}
