

import styles from './Login.module.css'


export default function Login() {
  return (
    <>
     <div className={styles.loginbody}>
          <div className={styles.logincontainerc1}>
              <div>
               <h2>Login</h2>
              <form action="">
                <div className={styles.logininput1}>
                  <label htmlFor="email">Email</label><br />
                <input type="Email" id='email' placeholder='enter email....' />
                </div>
                <div className={styles.logininput1}>
                    <label  htmlFor="password">Password</label><br />
                    <input type="password" id='password' placeholder='enter password...' />
                </div>
                 <div className={styles.loginbutton}>
                        <button>Login</button>
                 </div>
              </form>
              </div>
          </div>
     </div>
    </>
  )
}
