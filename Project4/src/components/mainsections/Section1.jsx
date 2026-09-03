
import './Section1.css'
import './MediaMain.css'
import { useState} from 'react'
export default function Section1({setMealSearch,setError,setSearchopen,setSearchopen1}) {
  const baseURL= "https://www.themealdb.com/api/json/v1/1"

    const [inputValue, setInputValue]=useState("")
   
    async function fectMeal(e) {
      if(inputValue ==""){
        alert("please enter the meal name")
        return 
      }
      e.preventDefault()
      setSearchopen(true)
      setSearchopen1(false)
      try{
      const response = await fetch(`${baseURL}/search.php?s=${inputValue}`) 
      
      const data = await response.json()
       if(!data.meals){
        alert("meal not found in the database")
        return
       }
      console.log(data.meals)
      setMealSearch(data.meals)
      
      }catch(err){
         setError("meal not found") 
         console.log(err)
      }
    }

  return (
    <>
      <section id="section1">
          <div className="containers1">
                <div className="heads1">
                    <h1>
                        <span className="span1">Discover a recipe <br className="brpoint"/> you'll</span> <span className="span2">Love.</span>
                    </h1>
                    <p>Search thousands of delicious meals, explore categories, and <br/> find step-by-step recipes for your next meal.</p>
                </div>
                <div className="heads2">
                      <form id="searchform" onSubmit={fectMeal}>
                           <div className="searchs1">
                               <input id="inputform" value={inputValue}  onChange={(e)=>setInputValue(e.target.value)}  type="search" placeholder="enter meal name...."/>
                               <button id="formbutton">
                                 Search
                               </button>
                           </div>
                      </form>
                </div>
                {/* <div className="heads13">
                     <button id="surprisebutton">Surprise me</button>
                </div> */}
          </div>
      </section>

    </>
  )
}
