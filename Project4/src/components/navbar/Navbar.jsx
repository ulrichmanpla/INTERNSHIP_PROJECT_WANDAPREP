import './Navbar.css'
import './mainMedia.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'
export default function Navbar() {
   const [isopen, setIsopen]=useState(false)
  return (
    <>
    <header>
          <div className="logo1">
              <img src={logo} alt="logo" width="100px"/>
          </div>
          <nav>
         
            <div  className={`navlink ${isopen? 'open': ''}`}>
            <svg onClick={()=>setIsopen(false)} className='close-icon' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                <ul>  
                    <li className="li1"><a href="#section1">Home</a></li>
                    <li><a href="#section2">Categories</a></li>
                    <li><a href="#section3">Recipes</a></li>
                </ul>
            </div>  

            <svg onClick={()=>setIsopen(true)} className='menu-icon' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg> 
            
          </nav>
     </header>
    
    </>
  )
}
