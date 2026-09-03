
import  styles from'./Homes.module.css'
import homeimg1 from '../../../assets/h6.png'
import light from '../../../assets/light.png'
import frame1 from '../../../assets/Frame1.png'
import frame2 from '../../../assets/Frame2.png'
import frame3 from '../../../assets/Frame3.png'
import frame4 from '../../../assets/Frame4.png'
import h7img from '../../../assets/h7.png'
import checkbox from '../../../assets/checkbox.png'
import h1img from '../../../assets/h1.png'
import h2img from '../../../assets/h2.png'
import h3img from '../../../assets/h3.png'
// import pexels from '../../../assets/pexels.png'
import arrow1 from '../../../assets/arrow.png'
import call from '../../../assets/CallButton.png'
import portrait from '../../../assets/portrait1.png'
import icon1 from '../../../assets/icon1.png'
import icon2 from '../../../assets/icon2.png'
import icon3 from '../../../assets/icon3.png'
import img1 from '../../../assets/1.png'
import img2 from '../../../assets/2.png'
import img3 from '../../../assets/3.png'
import h4img from '../../../assets/h4.png'
import h5img from '../../../assets/h5.png'

import Footer from '../footer/Footer'
export default function Homes() {
  return (
    <> 
     <div className={styles.homeshead1}>
        <div className={styles.homeh1}>
           <img src={light} alt="ligh" width={50} />
            <div className={styles.h12}>
              Knowledge Connection
              </div>
           <h2>
              Open the Door to the Future
           </h2>
           <p>
            Giving every student the opportunity to access the best education and open the door to <br /> the world of knowledge. <br />
            Start your learning journey today with Edudu to become an outstanding student in our <br />
            learning community.
           </p>
            <div className={styles.homebtn1}>
              Get started !
            </div>
        </div>
         <div className={styles.homeh2}>
            <img src={homeimg1} alt="homeimg1" /> 
         </div>
     </div>

      <div className={styles.homehead2}>
          <div>
              <h2>Lessons resolve around 4 areas</h2>
              <p>Diverse lessons around 4 subjects: Math, literature, English, drawing help <br /> child improve their comprehensive knowledge</p>
              <div className={styles.container1}>
                  <div className={styles.divc1}>
                     <div className={styles.c11}>
                       <img src={frame4} alt=""  />
                       <p>Math</p>
                     </div>
                  </div>
                  <div className={styles.divc1}>
                     <div className={styles.c11}>
                       <img src={frame1} alt="" />
                       <p>Literature</p>
                     </div>
                  </div>
                  <div className={styles.divc1}>
                     <div className={styles.c11}>
                       <img src={frame2} alt="" />
                       <p>English</p>
                     </div>
                  </div>
                  <div className={styles.divc1}>
                     <div className={styles.c11}>
                       <img src={frame3} alt="" />
                       <p>Art</p>
                     </div>
                  </div>
              </div>
          </div>
      </div>

      <div className={styles.homehead3}>
         <div className={styles.head3img}>
             <img src={h7img} alt="" />  
         </div>
         <div className={styles.head31}>
            <h2>What will your child <br /> get after studying at <br /> Edudu?</h2>
             <div className={styles.c12}>
              <div>
                <img src={checkbox} alt="" />
              </div>
              <p>Mater program knowledge at school</p>
             </div>
             <div className={styles.c12}>
              <div>
                <img src={checkbox} alt="" />
              </div>
              <p>The ability to critize knowledge increases</p>
             </div>
             <div className={styles.c12}>
              <div>
                <img src={checkbox} alt="" />
              </div>
              <p>Respond confidently when encountering <br /> difficult situations</p>
             </div>
         </div>
      </div>

      <div className={styles.containerc2}>
         <div className={styles.containerc21}>
            <h2>Why should you choose Edudu?</h2>
         </div>
         <div className={styles.containerc22}>
         </div>
         <div className={styles.containerc23}>
            <div className={styles.c21}>
               <img src={h1img} alt="" />
               <h3>Experienced teacher</h3>
               <p>Instructors from all over Vietman <br /> and around the world, providing <br /> quality learning experiences and <br /> helping studends develop their full <br /> potential</p>
            </div>
            <div className={styles.c21}>
               <img src={h2img} alt="" />
               <h3>Creative program</h3>
               <p>Flexible payment, suitable to <br /> personal financial situation and <br /> study schedule. Pay monthly, by <br /> course or "study now, pay later"</p>
            </div>
            <div className={styles.c21}>
               <img src={h3img} alt="" />
                <h3>Appropriate cost</h3>
                <p>Thiết kế giáo trình dựa trên năng lực <br />
và nhu cầu từng học viên, hoạt động <br />
học tập hấp dẫn, tương tác 2 chiều <br />
liên tục.</p>
            </div>
         </div>
      </div>
      
           <div className={styles.headc2}>
                  <div className={styles.headc21}>
                      <h2>What's in the class at Edudu ?</h2>
                      <p>Online classes with teacher, continous questions and answers during class during class if you do <br /> not understand. At the end fo the session, the lesson is recorded for your child to review</p>
                       <div className="c2btn1">
                         Free trial lesson
                       </div>
                  </div>
           </div>
           <div className={styles.headc22}>
                <div className={styles.headc221}>
                     <div className={styles.headc22img}>
                         <div className={styles.headc2icons}>
                             <div className={styles.iconc2} id={styles.iconc21}>
                               <img src={portrait} alt="" />
                             </div>
                             <div className={styles.iconc2}>
                               <img src={call} alt="" />
                             </div>
                             <div className={styles.iconc2}>
                               <img src={arrow1} alt="" />
                             </div>
                         </div>
                     </div>
                </div>
           </div>

           <div className={styles.headc232}>
               <div>
                   <div className={styles.containerc312}>
                       <div className={styles.iconc23}>
                         <img src={icon1} alt="" />
                          <p>Audio classes</p>
                       </div>
                       <div className={styles.iconc23}>
                         <img src={icon2} alt="" />
                          <p>Live Classes</p>
                       </div>
                       <div className={styles.iconc23}>
                         <img src={icon3} alt="" />
                          <p>Recorded Class</p>
                       </div>
                   </div>
               </div>
           </div>
           <div className={styles.containerc4}>
               <div>
                    <h2>What do student say about Edudu?</h2>
    
               </div>
                  <div className={styles.c412}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
                  </div>
               <div className={styles.containerc41}>
                  <div className={styles.c41}>
                      <img src={img1} alt="" />
                      <h3>Jassica Andrew</h3>
                       <div className={styles.svg1}>
                          <svg xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="#FFD700">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
</svg>
<svg xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="#FFD700">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
</svg>
<svg xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="#FFD700">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
</svg>
<svg xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="#FFD700">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
</svg>
<svg xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="#FFD700">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
</svg>

                       </div>
                       <p>
                         My child has improved a lot after finishing <br /> school. Thank you very much Edudu
                       </p>
                  </div>
                  <div className={styles.c41}>
                      <img src={img2} alt="" />
                      <h3>Darlen Robertson</h3>
                       <div className="svg1">
<svg xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="#FFD700">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
</svg>
<svg xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="#FFD700">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
</svg>
<svg xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="#FFD700">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
</svg>
<svg xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="#FFD700">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
</svg>
<svg xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="#FFD700">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
</svg>

                       </div>
                       <p>
                            My child knows how to write very good <br /> essays. English ability is also much better. <br /> The cost is very cheap, so you should <br /> register. Thank you very much Edudu.
                       </p>
                  </div>
                  <div className={styles.c41}>
                      <img src={img3} alt="" />
                      <h3>Dianne Russell</h3>
                       <div className={styles.svg1}>
<svg xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="#FFD700">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
</svg>
<svg xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="#FFD700">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
</svg>
<svg xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="#FFD700">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
</svg>
<svg xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="#FFD700">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
</svg>
<svg xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="#FFD700">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
</svg>

                       </div>
                       <p>
                          My child has improved a lot after finishing <br /> school. Thank you very much Edudu
                       </p>
                  </div>
               </div>
                  <div className={styles.c413}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
                  </div>
           </div>
           <div className={styles.containerc5}>
               <div className={styles.containerc51}>
                    <div className={styles.c51}>
                      <img src={h4img} alt="" />
                    </div>
                    <div className={styles.c51} id={styles.idc51}>
                        <h3>Do you Still have any question?</h3>
                        <p>Don't hesitate to leave us your phone number. We will contact you to <br /> discuss any questions you may have</p>
                         <div className={styles.inputbtn1} >
                            <input type="text" placeholder='Enter your phone number' />
                            <button>Subscribe</button>
                         </div>
                    </div>
                    <div className={styles.c51}>
                       <img src={h5img} alt="" />
                    </div>
               </div>
           </div>
   
   <Footer/>        
    </>
  )
}
