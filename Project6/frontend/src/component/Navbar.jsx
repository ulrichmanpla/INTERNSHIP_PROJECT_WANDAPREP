
import './Navbar.css'
import logo1 from '../assets/logo.jpg'
import {useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  const [username, setName] = useState('')
  const [userEmail, setEmail]=useState('')
  const [close, setClose]=useState(false)
   useEffect(()=>{
      async function getname() {
         const token = localStorage.getItem('token')
         console.log("my token", token)
         const response = await fetch('http://localhost:3000/auth/profile',{
          method:'GET',
          headers:{
            'Content-Type':'application/json',
            'authorization':`Bearer ${token}`
          }
         })
         const data = await response.json()
         console.log('this is the user name', data.username)
         setName(data.username)
         setEmail(data.email)
         console.log("this is the user email",data.email)
      }
      getname()
   },[])
   const nameslice = username.slice(0,2).toLocaleUpperCase()
    const  handleClose =()=>{
      setClose(prev => !prev)
    }
    console.log("ulrich email is", userEmail)
   return (
    <>
     <header>
         <div>
            <img src={logo1} alt="" width={100} />
         </div>
        <div onClick={()=>{handleClose()}} className='profile'>{nameslice}</div>
       { close && <div className='ambugerControl' >
           <div className='userProfilename'>
            {username}
           </div>
          <div className='userProfileemail'>
            {userEmail}
          </div>
          <div className='logout' >
             <Link to='/'>Logout</Link>
          </div>
        </div>}
     </header>
    </>
  )
}
