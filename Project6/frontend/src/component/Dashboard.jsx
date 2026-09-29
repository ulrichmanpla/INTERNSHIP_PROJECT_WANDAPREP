

import { useState,useEffect, useRef} from 'react'
import styles from  './Dashboard.module.css'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
export default function Dashboard() {
  const today = new Date().toISOString().split('T')[0]
    const [isopen, setOpen] = useState(false)
    const mydialog = useRef()
 const [task, setTask] = useState([])
 const [name, setName] = useState('')
 const [select, setSelect] = useState('all')
 const [intitle, setInTitle] = useState('')
 const [inDescription, setInDescription]= useState('')
 const [inDate, setInDate] =useState(' ')
 const [inpriority, setInPriority]=useState('')
 const [opsucess, setOPen] = useState(false)
 const [errtitle, setErrTitle]=useState('')
 const [errtext, setErrText]=useState('')
 const [errdate, setErrdate]=useState('')
 const [msgdelete, setMsgDelet]=useState(false)
//  const [errtitle, setErrTitle]=useState('')
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
  
     console.log("the dashboard task", task)
     const handleCheck=async (taskid)=>{
      const token = localStorage.getItem('token')
      const snap = task
      setTask(prev => prev.map( n=> n.taskID == taskid ? {...n, completed: !n.completed} : n
      ))

      try{
       const response =   await fetch(`http://localhost:3000/task/${taskid}`,{
        method:'PATCH',
        headers:{
          'Contend-Type':'application/json',
          'authorization':`Bearer ${token}`
        }
       })
          if(!response.ok){
            throw new Error(`HTTP ${response.status}`)
          }
      }catch(err){
        setTask(snap)
         console.log("something when wrong", err)
      }
      
     }
 const sorted = task.sort((a,b)=> Number(a.completed) - Number(b.completed))
 const  pending = task.filter(n => !n.completed)
  const complete= task.filter(n => n.completed)
  const handleForm = async (e)=>{
    const token = localStorage.getItem('token')
     e.preventDefault()
      try{
      if(!intitle.trim()){
        setErrTitle('Title task is require')
        return 
      }
      if(inDescription.trim() === " "){
          setErrText("Description is required")
          return 
      }
      if(inDescription.trim().length < 10){
        setErrText(" min description length is 10")
        return
      }
      if(inDescription.trim().length > 500){
        setErrText(" max description length is 500")
        return
      }
      if(inDate.trim() == ""){
        setErrdate("Date is required")
        return
      }
     
     const response = await fetch('http://localhost:3000/task/create',{
       method:'POST',
       headers:{
        'Content-Type':'application/json',
        'authorization':`Bearer ${token}`
       },
       body:JSON.stringify({title:intitle,description:inDescription,date:inDate,priority:inpriority})
     })

     if(!response.ok){
      //  alert("task successfully created") 
      throw new Error("API failed to create task")
    }
       setOPen(true)
        setTask([
          {title:intitle,description:inDescription,date:inDate,priority:inpriority},
          ...task
        ])
        setTimeout(()=>setOPen(false),2000)
        setInTitle(' ')
        setInDescription(' ')
        setInPriority('')
        setInDate(' ')
     }catch(err){
      console.log("something when wrong",err.message)
    }
  }
  const handleDelete= async(id)=>{
        const token = localStorage.getItem('token')
        const deletefilter = task.filter( n => n.taskID !== id)
        setTask(deletefilter)
        try{
       const response = await fetch(`http://localhost:3000/task/${id}`,{
         method:'DELETE',
        headers:{
          'Content-Type':'application/json',
          'authorization':`Bearer ${token}`
       }
        })
        if(!response.ok){
          throw new Error('the API failed')
        }
        setMsgDelet(true)
        setTimeout(()=>setMsgDelet(false), 2000)
      }catch(err){
        console.log("something when wrong",err.message)
      }
  }
  const dialogClose= ()=>{
      mydialog.current?.close()
  }
  const openmodal = ()=>{
    mydialog.current?.showModal()
  }
function getDueStatus(dateStr){
  if(!dateStr) return 'none'
  if(dateStr < today) return 'passed'
  if(dateStr === today) return 'today'
   
  return 'upcoming'
}


 return (
    <> 
      <Navbar/>
<div className={styles.Dashboardmain}>
      <div className={styles.dmainc1}>
         <div className={styles.backbtn}>
         <Link to='/home' > 
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#111111"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>  
         </Link>
         </div>
        <div className={styles.dformc1}>
          <div className={styles.dtext1}>Hello {name} !</div>
          <button className={styles.dbtn1} onClick={()=>setOpen(true)}> + Add Task</button>
        </div>
    { opsucess && <div className={styles.messageCreateion}>
         <div>
             task successfully created
         </div>
     </div>}
     { msgdelete && <div className={styles.messageDeletion}>
         <div>
             successfully Delete Task
         </div>
     </div>}
       { isopen && <div className={styles.dformc2}>
            <form  onSubmit={handleForm}>
            <div className={styles.dinput1}>
                 <div className={styles.dinpt1}>
                <label htmlFor="title">Title</label><br />
                <input value={intitle} onChange={(e)=>{setInTitle(e.target.value)
                  setErrTitle('')
                }} type="text" placeholder='Enter title'  />
                <p style={{color:'red'}}>{errtitle}</p>
                </div>
                <button className={styles.dbtn2}>Add</button>
            </div>
            <div className={styles.dinput2}>
                <div>
                 <label htmlFor="description">Description</label><br />
                 <textarea value={inDescription} onChange={(e)=>{setInDescription(e.target.value)
                  setErrText('')
                 }} placeholder='description' className={styles.darea} maxLength={500} minLength={10} ></textarea>
                  <p style={{color:'red'}}>{errtext}</p>
                </div>
                <div>
                    <label htmlFor="date">Date</label><br />
                     <input value={inDate} onChange={(e)=>{setInDate(e.target.value)
                      setErrdate('')
                     }} type="date" min={today}  />
                     <p style={{color:'red'}}>{errdate}</p>
                </div>
            </div>
            <div className={styles.select1}>
              <label htmlFor="">Priority</label><br />
              <select required value={inpriority} onChange={(e)=>setInPriority(e.target.value)} >
                 <option value="">Choose Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </form>
            <div className={styles.dclose}>
                 <button className={styles.dbtn3} onClick={()=>setOpen(false)}>Close</button>
            </div>
        </div>}
        
         <div className={styles.htask}>
             <h3 style={{marginBottom:'10px'}}>Your Tasks</h3>
                      <div className={styles.htaskc1}>
               <div onClick={()=>setSelect('all')} className={ select === "all"? styles.dactive : ''}>All</div>
               <div onClick={()=>setSelect('active')} className={ select === "active"? styles.dactive : ''}>Active</div>
               <div onClick={()=>setSelect('completed')} className={ select === "completed"? styles.dactive : ''}>Completed</div>
            </div>

              { select =="all" && <div>
                   {
                     sorted.map(n=> { 
                       const status = getDueStatus(n.date)
                      return(<div key={n.taskID} >
                            <dialog ref={mydialog} className={styles.reactmodal}>
               <div>
                  Do you really want delete this Task
               </div>
               <div className={styles.modalbtn1}>
             <div className={styles.modalbtn2}  onClick={dialogClose}>Cancel</div>
              <div className={styles.modalbtn3} onClick={()=>handleDelete(n.taskID)}>Delete</div>
               </div>
                </dialog>
                         <div className={`${styles.h2task} ${n.completed ? styles.linetext :''}`}>
                             <div className={styles.h3task}>
                             <div>
                               <input type="checkbox"  checked={n.completed} onChange={()=>handleCheck(n.taskID)} disabled={n.completed}/>
                             </div>
                             <div>
                               <h4>{n.title}</h4>
                               <p className={styles.descriptiontext}>{n.description.split(" ")[0]}...</p>
                               <div className={` ${styles.priorityh3} ${styles[n.priority.toLowerCase()]}`}>{n.priority}</div>
                               <br />
                                <div>
                                   { status =='passed' && (<div className='today1'>Due Date:Passed</div>)}
                                   {  status =='today' &&  <div className='today2'>Due Date: Today</div>}
                                   { status == "upcoming" && <div>
                                     <div className='today3'>Upcoming</div>
                                       <div>{n.date}</div>
                                   </div> }
                                </div>
                             </div>
                             </div>
                             <div>
                                  <Link to={`/detailpage/${n.taskID}`}>Read More</Link> <br />
                                <svg onClick={openmodal} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f42020"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                             </div>
                         </div>
                     </div>)}
                     )
                   }
               </div>}
                { select == "active" && <div>               
                     {
                     pending.map(n=><div key={n.taskID} >
              <dialog ref={mydialog} className={styles.reactmodal}>
               <div>
                  Do you really want delete this Task
               </div>
               <div className={styles.modalbtn1}>
             <div className={styles.modalbtn2}  onClick={dialogClose}>Cancel</div>
              <div className={styles.modalbtn3} onClick={()=>handleDelete(n.taskID)}>Delete</div>
               </div>
                </dialog>
                         <div className={`${styles.h2task} ${n.completed ? styles.linetext :''}`}>
                             <div className={styles.h3task}>
                             <div>
                               <input type="checkbox"  checked={n.completed} onChange={()=>handleCheck(n.taskID)} disabled={n.completed}/>
                             </div>
                             <div>
                               <h4>{n.title}</h4>
                               <p className={styles.descriptiontext}>{n.description.split(' ')[0]}.....</p>
                               <div className={` ${styles.priorityh3} ${styles[n.priority.toLowerCase()]}`}>{n.priority}</div>
                             </div>
                             </div>
                             <div>
                                <svg onClick={openmodal} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f42020"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                             </div>
                         </div>
                     </div>)
                   }
                </div>}
                { select == 'completed' && <div>
                   {
                     complete.map(n=> <div key={n.taskID} >
                           <dialog ref={mydialog} className={styles.reactmodal}>
               <div>
                  Do you really want delete this Task
               </div>
               <div className={styles.modalbtn1}>
             <div className={styles.modalbtn2}  onClick={dialogClose}>Cancel</div>
              <div className={styles.modalbtn3} onClick={()=>handleDelete(n.taskID)}>Delete</div>
               </div>
                </dialog>
                         <div className={`${styles.h2task} ${n.completed ? styles.linetext :''}`} >
                             <div className={styles.h3task}>
                             <div>
                               <input type="checkbox"  checked={n.completed} onChange={()=>handleCheck(n.taskID)} disabled={n.completed}/>
                             </div>
                             <div>
                               <h4>{n.title}</h4>
                               <p className={styles.descriptiontext}>{n.description.split(' ')[0]}....</p>
                               <div className={` ${styles.priorityh3} ${styles[n.priority.toLowerCase()]}`}>{n.priority}</div>
                             </div>
                             </div>
                             <div>
                                 
                                <svg onClick={openmodal} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f42020"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                             </div>
                         </div>
                     </div>)
                   }
                 </div>}
                
          </div> 
     </div>

  </div>   
    </>
  )
}

