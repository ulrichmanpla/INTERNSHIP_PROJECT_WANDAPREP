
import './Section2.css'
// import './MediaMain.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function Section2() {
   const [category, setCategory]=useState([])
   const [selectCategory, setSelectCategory]= useState("")
   const [meals, setMeals]=useState([])
   const [error, setError]= useState("")
  const baseURL= "https://www.themealdb.com/api/json/v1/1"
   useEffect(()=>{
         async function fetchCategories() {
    try{
    const response1= await fetch(`${baseURL}/categories.php`)
    if(!response1.ok){
        throw new Error ("API failed")
    }
    const data1= await response1.json()
      setCategory(data1.categories)
      console.log(data1.categories)
}
    catch(err){
      setError("Could not load categories.")
     console.log(err)
}
   }
   fetchCategories()
},[])

   async function handleCategoryClick(categoryName){
    console.log("hello ulrich")
      setSelectCategory(categoryName)
      try{
         const response = await fetch(`${baseURL}/filter.php?c=${categoryName}`)
         if(!response.ok){
          throw new Error("Failed to fetch meals");
         }
          const data = await response.json()
         setMeals(data.meals || [])

         
      }catch(err){
        setError(`could not load meals for ${categoryName}`)
        console.log(err)
      }
   }
  return (
    <>
      <section id="section2"> 
    
         <h2>Food Categories</h2>
          <div id="category" class="categories" > 
             {category.map(category => 
               <div  className={`divc1 category-card ${selectCategory == category.strCategory ? "active":'' }`} data-category="${category.strCategory}"
                onClick={()=> handleCategoryClick(category.strCategory)}
               >
         <h3>{category.strCategory}</h3>
         </div>
             )}
        </div>
           {selectCategory &&(
          <div class="containers3" id="categorycontainer1"> 
                  {meals.map(meals => 
                    <div class="divc3">
              <div class="imgc3">
              <img src={meals.strMealThumb}/>
              </div>
              <h4>{meals.strMeal}</h4>
               <p class="divc3head1">{meals.strCategory}{meals.strArea}</p>
               {/* <a href="recipe.html?id={meals.idMeal}">View Details</a>     */}
                <Link to={`/recipe/${meals.idMeal}`}>View Details</Link>

           </div>
                  )}
          </div>
          )}     
          {
          error&&<p id="categoryerror">{error}</p>
          }
    </section>
  
    </>
  )
}
