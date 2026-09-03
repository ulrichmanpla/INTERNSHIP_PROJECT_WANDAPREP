
import './Footer.css'

import logo from "../../assets/logo.png"
export default function Footer() {
  return (
    <>
        <footer>
       <div>
          <div class="footer1">
             <img src={logo} alt="logo" width="100px"/>
             <p class="line"></p>
             <p class="footertext">Simple recipes </p>
          </div>
          <span><a href="#section1">Home</a></span> | <span><a href="#section2">categories</a></span> | <span><a href="#section3">Recipes</a></span>
       </div>
     </footer>
    </>
  )
}
