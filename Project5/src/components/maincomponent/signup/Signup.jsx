

import styles from './Signup.module.css'
export default function Signup() {
  return (
    <>
       <div className={styles.signupbody}>
         <div className={styles.singupcontainerc1}>
              <h1>Sign Up</h1>
             <form>
                 <div className={styles.input1}>
                <label htmlFor="email">Email</label><br />
                <input type="email" id='email' placeholder='enter email....' required/>
                </div>
                 <div className={styles.input1}>
                   <label htmlFor="username">Username</label><br />
                   <input type="text" placeholder='enter username....' required />
                 </div>
                 <div className={styles.input1}>
                    <label htmlFor="password">Password</label><br />
                    <input type="password" placeholder='enter password....' required />
                 </div>
                  <div className={styles.signupbtn1}>
                  <button>Create account </button>
                  </div>
             </form>
         </div>
       </div>
    </>
  )
}
