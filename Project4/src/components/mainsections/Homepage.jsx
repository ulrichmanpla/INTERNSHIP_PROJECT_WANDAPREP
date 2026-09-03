  import { useState } from "react"
 import Navbar from "../navbar/Navbar"
 import Section1 from "./Section1"
 import Section2 from "./section2"
 import Section3 from "./Section3"
  import Footer from "./Footer"
export default function Homepage() {
const [mealsearch, setMealSearch]=useState([])
const [errors, setError]=useState("")
const [searchopen, setSearchopen]=useState(false)
const [searchopen1, setSearchopen1]=useState(true)
  return (
    <>
          <Navbar/>
          <Section1 setMealSearch={setMealSearch} setError={setError} setSearchopen={setSearchopen} setSearchopen1={setSearchopen1}/>
          <Section2 setSearchopen1={setSearchopen1}/>
          <Section3 mealsearch={mealsearch} errors={errors} searchopen={searchopen} searchopen1={searchopen1} />
          <Footer/>
    </>
  )
}
