
import styles from './Navbar.module.css'
import logo1 from "../../assets/Framelogo.png"
import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
export default function Navbar({selectcourse, setSelectCourse}) {
 const math="Math course for 3rd grade children"
 const literatures="Literature course for 3rd grade children"
  const location = useLocation()
  const courseActive = 
   location.pathname === "/course" ||
    location.pathname === "/coursedetails";
    
    const teachActive =
      location.pathname === "/teacher" ||
      location.pathname === "/teacherdetails"
  const [isopen, setIsOpen]=useState(false)
  return (
    <>
      <header>
          <div className={styles.logoimg1}>
             <NavLink to='/'>
              <img src={logo1} alt="logoimg"  width={130}/> 
             </NavLink> 
           </div>  

             <nav>
               <div className={`${styles.navlink} ${ isopen? styles.open: ''}`}>
                 <div>
                <svg onClick={()=>setIsOpen(false)} className={styles.menuclose}  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#111111"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                   <ul>
                      <li><NavLink onClick={()=>setIsOpen(false)} to='/' className={({isActive})=> isActive? styles.active: styles.navItem }>Home</NavLink></li>
                      <li ><NavLink to='/course' className={`${styles.li1} ${styles.navItem} ${ courseActive? styles.active :""}`} onClick={()=>setIsOpen(false)} >
                         <select value={selectcourse} onChange={(e)=>setSelectCourse(e.target.value)}>
                            <option value="">Course</option>
                            <option value={math}>Math</option>
                            <option value={literatures}>Literature</option>
                            <option value="English">English</option>
                            <option value="Art">Art</option>
                         </select>
                        </NavLink>
                        </li>
                      <li> <NavLink to='/teacher' className={`${styles.navItem} ${teachActive? styles.active : " "}`} onClick={()=>setIsOpen(false)} >Teacher</NavLink></li>
                      <li> <NavLink to='/howtouse' >How to use</NavLink></li>
                      <li><NavLink to='/aboutus'>About Us</NavLink></li>
                   </ul>
                  </div>
                   
               <div  className={`${styles.register}  `}>
                 <NavLink to='/signup' onClick={()=>setIsOpen(false)}>
                <div className={styles.singup}>Sign Up</div>
                </NavLink>
                  <NavLink to='/login' onClick={()=>setIsOpen(false)}>
                 <div className={styles.login}>Log in</div>
                  </NavLink>
             </div>
               </div>
               <svg  onClick={()=>setIsOpen(true)} className={styles.menuopen} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#111111"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
             </nav>
      </header> 
    </>
  )
}
