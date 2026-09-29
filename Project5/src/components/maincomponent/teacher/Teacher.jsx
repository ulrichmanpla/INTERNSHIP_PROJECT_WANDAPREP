
import styles from './Teacher.module.css'
import Footer from '../footer/Footer'
import { NavLink } from 'react-router-dom'
export default function Teacher({teacher}) {
  return (
    <>
    <div className={styles.bodyTeacher}>
        <div className={styles.containerc1}>
            <h1>A team of experienced teachers at Edudu</h1>
        </div>
        <div className={styles.containerc2}>
            {teacher.map(user =>
              <NavLink to={`/teacherdetails/${user.id}`}>
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
