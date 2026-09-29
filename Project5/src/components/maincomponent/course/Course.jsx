
import styles from './Course.module.css'

import h8img from '../../../assets/h8.png'
import rectangle9 from '../../../assets/Rectangle9.png'
import rectangle10 from '../../../assets/Rectangle10.png'
import rectangle11 from '../../../assets/Rectangle11.png'
import rectangle16 from '../../../assets/Rectangle16.png'
import shoppingCard from '../../../assets/Group1.png'
import blink from '../../../assets/Blink.png'
import ander from '../../../assets/Ander.png'
import bigbird from '../../../assets/bigbird.png'
import bartender from '../../../assets/Bartender.png'
import bill from '../../../assets/Bill.png'
import rectangle12 from '../../../assets/Rectangle12.png'
import rectangle13 from '../../../assets/Rectangle13.png'
import rectangle14 from '../../../assets/Rectangle14.png'
import rectangle15 from '../../../assets/Rectangle15.png'
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer'
import { useRef, useState} from 'react'
export default function Course({selectcourse, setSelectCourse}) {
   const math="Math course for 3rd grade children"
   const literatures="Literature course for 3rd grade children"
   const [search, setSearch]=useState("")
   const myRef= useRef(null)
   const [MathCourse, setMathCourse]= useState([
      {
         id:1,
      image: rectangle16,
      title:"Math course for 3rd grade children"
      },
            {
         id:2,
      image: rectangle9,
      title:"Math course for 3rd grade children"

      },
            {
         id:3,
      image: rectangle10,
      title:"Math course for 3rd grade children"

      },
            {
         id:4,
      image: rectangle11,
      title:"Math course for 3rd grade children"

      }
   ])

    const [ LiteratureCourse, setLiteraturecourse] =useState([
      {
         id:1,
         image: rectangle12,
         title:"Literature course for 3rd grade children"
      },
            {
         id:2,
         image: rectangle13,
         title:"Literature course for 3rd grade children"

      },
            {
         id:3,
         image: rectangle14,
         title:"Literature course for 3rd grade children"

      },
            {
         id:4,
         image: rectangle15,
         title:"Literature course for 3rd grade children"

      }
    ])
    
    const searchmath = MathCourse.filter((maths)=>{
        const math1 =
         selectcourse ===""||
         maths.title === selectcourse
         return  math1
    })
        const searchliterature = LiteratureCourse.filter((maths)=>{
        const math1 =
         selectcourse ===""||
         maths.title === selectcourse
         return  math1
    })

    const handleSearch=()=>{
       if(!myRef.current.value.trim()){
         return alert("please enter  the research title")
       }
      const seachhandle= MathCourse.filter(Mcourse => Mcourse.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
       setMathCourse(seachhandle)
       const seachhandles= LiteratureCourse.filter(Mcourse => Mcourse.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
       setLiteraturecourse(seachhandles)
    }
  return (
    <>
     <div className={styles.bodyhead}>
       <div className={styles.headspan1}><span className={styles.span1}>Home |</span><span className={styles.span2}>Pricing</span></div>
        <div className={styles.containerc1}>
              <div className={styles.headc1}>
                 <h1>Edudu offers you a 30% <br /> discount this season</h1>
                 <p>Promotion valid May 1, 2023 - june 30,  2023</p>
                   <div className={styles.c1btn1}>
                       Explore now
                   </div>
              </div>
              <div className={styles.headc12}>
                       <img src={h8img} alt="" />
              </div>
        </div>
         
         <div className={styles.containerc2}>
              <div onClick={()=>setSelectCourse("")} className={selectcourse === ""? `${styles.divc2 } ${styles.activecourse}`: styles.divc2} id={styles.divc21}>All Courses</div>
              <div onClick={()=>setSelectCourse(math)} className={selectcourse === math ? `${styles.divc2 } ${styles.activecourse}`: styles.divc2}>Math</div>
              <div onClick={()=>setSelectCourse(literatures)} className={selectcourse === literatures? `${styles.divc2 } ${styles.activecourse}`: styles.divc2}>Literature</div>
              <div onClick={()=>setSelectCourse("English")} className={selectcourse === "English"? `${styles.divc2 } ${styles.activecourse}`: styles.divc2}>English</div>
              <div onClick={()=>setSelectCourse("Art")} className={selectcourse === "Art"? `${styles.divc2 } ${styles.activecourse}`: styles.divc2}>Art</div>
         </div>

         <div className={styles.containerc3}>
              <div className={styles.headc31}> 
                  <input ref={myRef} type="search" value={search}  onChange={(e)=>setSearch(e.target.value)} placeholder='Search Course, Teacher name' />
                  <button onClick={handleSearch}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                  </button>
              </div>
              <div className={styles.headc32}>
                   <div>
                       <span className={styles.span3}>Sort by:</span> <span className={styles.span4}>Latest</span>
                   </div>
                   <div>
                           <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z"/></svg>
                      
                   </div>
              </div>
         </div>
         <div className={styles.containerc4}>
                   <h3>Math Course </h3> 
                   <div className={styles.headc41}>
                     <div>
                     See more 
                     </div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>

                   </div>
         </div>

         <div className={styles.containerc5}>
            { searchmath.length > 0 ?( 
               searchmath.map(math =>
             <Link to='/coursedetails'>
              <div className={styles.divc5}>
                   <div className={styles.c5img1}>
                      <img src={math.image} alt="" />
                   </div>
                     <div className={styles.headc52}>
                          <div className={styles.c521}>
                               <div className={styles.imgc511}>
                                <img src={blink} alt="" width={30} />
                               </div>
                               <div className={styles.imgc512}>
                                <img src={ander} alt="" width={30} />
                               </div>
                               <div className={styles.imgc513}>
                                <img src={bigbird} alt="" width={30} />
                               </div>
                               <div className={styles.imgc514}>
                                <img src={bartender} alt=""  width={30}/>
                               </div>
                               <div className={styles.imgc515}>
                                <img src={bill} alt=""  width={30}/>
                               </div>
                          </div>
                          <div className={styles.c5text1}>
                              <span className={styles.spanc52}> + 40 students</span>
                          </div>
                     </div>
                       <div className={styles.c5text2}>
                   <h3>{math.title}</h3>
                  <p>Course summarizing semester 1 knowledge for 3rd <br /> graders according to the program at school. The course <br /> includes 120 lessons, which students study for 3 months</p>
                   <div className={styles.c51}>
                      <div>
                         <span className={styles.spanc51}>$ 380</span> <strike>$500</strike>
                      </div>
                      <div>
                         <img src={shoppingCard} alt="" />
                      </div>
                   </div>
                 </div>
              </div>
               </Link>  
               )
            ):(
               <p style={{color:'red'}}>course not available</p>
               )
            }

         </div>
       

        <div className={styles.containerc4}>
                   <h3>Literature Course </h3> 
                   <div className={styles.headc41}>
                     <div>
                     See more 
                     </div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>

                   </div>
         </div>

         <div className={styles.containerc5}>
             {searchliterature.length > 0 ? (
               LiteratureCourse.map(literure=> 
              <div className={styles.divc5}>
                   
                   <div className={styles.c5img1}>
                      <img src={literure.image} alt="" />
                   </div>
                     <div className={styles.headc52}>
                          <div className={styles.c521}>
                               <div className={styles.imgc511}>
                                <img src={blink} alt="" width={30} />
                               </div>
                               <div className={styles.imgc512}>
                                <img src={ander} alt="" width={30} />
                               </div>
                               <div className={styles.imgc513}>
                                <img src={bigbird} alt="" width={30} />
                               </div>
                               <div className={styles.imgc514}>
                                <img src={bartender} alt=""  width={30}/>
                               </div>
                               <div className={styles.imgc515}>
                                <img src={bill} alt=""  width={30}/>
                               </div>
                          </div>
                          <div className={styles.c5text1}>
                              <span className={styles.spanc52}> + 40 students</span>
                          </div>
                     </div>
                       <div className={styles.c5text2}>
                   <h3>{literure.title}</h3>
                  <p>Course summarizing semester 1 knowledge for 3rd <br /> graders according to the program at school. The course <br /> includes 120 lessons, which students study for 3 months</p>
                   <div className={styles.c51}>
                      <div>
                         <span className={styles.spanc51}>$ 380</span> <strike>$500</strike>
                      </div>
                      <div>
                         <img src={shoppingCard} alt="" />
                      </div>
                   </div>
                 </div>
              </div>
              )
            ):(
               <p style={{color:'red'}}>course not available</p>
            )}
         </div>
    </div> 
    <Footer/>  
    </>
  )
}
