
import styles from './Teacher.module.css'
import rectangle1 from  '../../../assets/Rectangle1.png'
import rectangle2 from '../../../assets/Rectangle2.png'
import rectangle3 from '../../../assets/Rectangle3.png'
import rectangle4 from '../../../assets/Rectangle4.png'
import rectangle5 from '../../../assets/Rectangle5.png'
import rectangle6 from '../../../assets/Rectangle6.png'
import rectangle7 from '../../../assets/Rectangle7.png'
import rectangle8 from '../../../assets/Rectangle8.png'
import Footer from '../footer/Footer'
import { NavLink } from 'react-router-dom'
export default function Teacher() {
     const teacher = [
        {
            id:1,
            name:"Jessica Nephi",
            img:rectangle8,
            text:"5 years of experience teaching Math. Currently working at Weston school"
        },
        {
            id:2,
            name:"Henry, Arthur",
            img:rectangle1,
            text:"10 years of experience teaching English Currently working at Weston school"
        },
        {
            id:3,
            name:"Flores, Juanita",
            img:rectangle2,
            text:"3 years of experience teaching Math. Currently working at Vinvi school."
        },
        {
            id:4,
            name:"Nguyen, Shane",
            img:rectangle3,
            text:"4 years of experience teaching Math. Currently working at Wing school"
        },
        {
            id:5,
            name:"Courtney Henry",
            img:rectangle4,
            text:"5 years of experience teaching Math. Currently working at Weston school"
        },
        {
            id:6,
            name:"Leslie Alexander",
            img:rectangle5,
            text:"10 years of experience teaching English. Currently working at Weston school"
        },
        {
            id:7,
            name:"Jerome Bell",
            img:rectangle6,
            text:"3 years of experience teaching Math. Currently working at VinVi school"
        },
        {
            id:8,
            name:"Leslie Alexander",
            img:rectangle7,
            text:"4 years of experience teaching Math. Currently working at Wing school"
        },
     ]
  return (
    <>
    <div className={styles.bodyTeacher}>
        <div className={styles.containerc1}>
            <h1>A team of experienced teachers at Edudu</h1>
        </div>
        <div className={styles.containerc2}>
            {teacher.map(user =>
              <NavLink to='/teacherdetails'>
            <div className={styles.divc21}>
                 <img src={user.img} alt="" />
                <h3>{user.name}</h3>
                <div className={styles.svgc21}>
              <svg xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="#FFD700">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
</svg><svg xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="#FFD700">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
</svg><svg xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="#FFD700">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
</svg><svg xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="#FFD700">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
</svg>
<svg xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="#FFD700">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
</svg>
                </div>
                <p>{user.text}</p>
            </div>
        </NavLink>
)}
        </div>

        <Footer/>
    </div>
    </>
  )
}
