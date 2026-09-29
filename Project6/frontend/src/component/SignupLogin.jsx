

import './login.css'
import logo from '../assets/logo.jpg'
import {useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
export default function SignupLogin() {
  const Navigate = useNavigate()
  const [select, setSelect] = useState('login')
  const [email, setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [username, setUsername]=useState('')
  const [confirmpassword, setComfirmpass]=useState('')
   const [loginerror, setErrorlogin] = useState('')
   const [signError, setSignerr]=useState('')
   const [errlog1, setErrlog1]=useState('')
   const [errlog2, setErrlog2]=useState('')
   const[ log1, setLog1]=useState('')
   const myRef = useRef()
  const handlelogin = async (e)=>{
      e.preventDefault()
    const response = await fetch('http://localhost:3000/auth/login',{
       method:'POST',
       headers:{
        'Content-type':'application/json'
       },
       body: JSON.stringify({email, password})
    })
    const data = await response.json()
    if(response.ok){
      localStorage.setItem('token',data.login.token)
        Navigate('/home')
    }else{
      // alert(data.message || "Connexion problem Check your server")
      setErrorlogin(data.message)
    }
  }
  handlelogin()
    const handleSignup =async (e)=>{
      e.preventDefault()
       try{
         
         if(username.trim() ==""){
           setErrlog2('username is required')
           return
         }
      if(email.trim() ==""){
          setErrlog1("Email is required")
          return 
      }
      if(email.trim()==" "){
        setLog1("Email is required")
        return
      }
      // if(password.trim() == ""){
      //   setErrPass("password is required")
      //   return 
      // }
      // if(myRef.current.value.trim() == ""){
      //   seterrConfirm('Confirm password required')
      // }
      if(password.trim().length < 8){
         setSignerr(" Password must be at 8 characters")
         return
      }
      if(password.trim().length > 255){
        setSignerr("Maximum password length 255")
        return
      }
         if(password.trim() !== confirmpassword.trim()){
        // alert(" invalid confirm password ")
        setSignerr("invalid confirm password")
        return 
      }

       const response = await fetch('http://localhost:3000/auth/register',{
         method:'POST',
         headers:{
          'Content-Type':'application/json'
         },
         body:JSON.stringify({username: username, email:email, password: password})
       })
      //  if(!response.ok){
      //     console.log('api failed')
      //  }
       const data = await response.json()
       setSignerr(data.message)
      }catch(err){
        console.log("something when wrong", err.message)
      }
      setComfirmpass('')
      setUsername(' ')
      setEmail(' '),
      setPassword('')
      setSelect('login')
       
    }
  return (
    <>
      <div className="loginContainerc1">
            <div className="loginContainerc11">
                <div className="loginheader1">
                    <img src={logo} alt="log" width={100}/>
                     <p className="text1">Welcom to TaskFlow</p>
                     <p className='text2'>Manage your tasks with style and efficiency</p>
                </div>
                <div className="loginsignup">
                     <div className={select == "login" ? 'active' :''} onClick={()=>setSelect('login')}>Login</div>
                     <div  className={select == "signup" ? 'active' :''} onClick={()=>setSelect('signup')}>Sign Up</div>
                </div>
                {select== "login" &&<div>
                <form className='form1' onSubmit={handlelogin}>
                   <p style={{color:'red'}}>{loginerror}</p>
                    <label htmlFor="email">Email</label><br />
                    <input value={email} onChange={(e)=>{setEmail(e.target.value)
                       
                      setLog1('')
                    }} className='input1' type="email" id='email' placeholder='Enter your email' />
                     <p style={{color:'red'}}>{log1}</p>
                     <label htmlFor="password">Password</label><br />
                     <input value={password} onChange={(e)=>{setPassword(e.target.value)
                      setErrorlogin('')
                     }} className='input2' type="password" id='password' placeholder='Enter your password'  />
                      <p style={{color:'red'}}>{errlog1}</p>
                      <input className='btn1' type="submit" value="Login" />
                </form>
                </div>}

                { select == "signup" && <div>
                    <form className='form1' onSubmit={handleSignup}>
                   <p style={{color:'red'}}>{signError}</p>
                     <label htmlFor="username">Username</label><br />
                     <input value={username} onChange={(e)=>{setUsername(e.target.value)
                      setErrlog2('')
                     }} className='input1' type="text" placeholder='Enter name'/>
                     <p style={{color:'red'}}>{errlog2}</p>
                    <label  htmlFor="email">Email</label><br />
                    <input value={email} onChange={(e)=>{setEmail(e.target.value)
                      setErrlog1('')
                    }} className='input1' type="email" id='email' placeholder='Enter your email'  />
                     <p style={{color:'red'}}>{errlog1}</p>
                    <label htmlFor="username">Password</label><br />
                     <input value={password} onChange={(e)=>{setPassword(e.target.value)
                      setErrlog2(' ') 
                      setSignerr('')
                     }} className='input1' type="text" placeholder='Enter password'/>
                     {/* <p style={{color:'red'}}>{errpass}</p> */}
                     <label htmlFor="password">confirm Password</label><br />
                     <input ref={myRef} value={confirmpassword} onChange={(e)=>{setComfirmpass(e.target.value)
                      setSignerr('')
                     }} className='input2' type="password" id='password' placeholder='confirm password' />                     
                      <input className='btn1' type="submit" value="signup" />
                </form>
                </div>
            }
            </div>
      </div>
    </>
  )
}
