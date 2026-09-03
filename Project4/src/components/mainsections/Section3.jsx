

import './Section3.css'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function Section3({mealsearch,searchopen,searchopen1}) {
const baseURL="https://www.themealdb.com/api/json/v1/1"
  const [meal, setMeal]=useState([])
   useEffect(()=>{
     async function foodmeals() {
    try{

        const response2 = await fetch(`${baseURL}/search.php?s=chicken `)
          if(!response2.ok){
           throw new Error ("API failed")
          }
         const data2 = await response2.json()
           setMeal(data2.meals)
         console.log(data2)
    }catch(err){
        console.log(err)
    }

}
foodmeals()
   },[])
  return (
    <>
           <section id="section3">
           <div id="categorycontainer1">
           </div>
          <div>
              <h2 id="headc31"></h2>

              {searchopen &&(
                  <div>
                    <h2>Search Result</h2>
                <div className="containers31" id="searchs3container">  
              {/* <p id="contaiter31error"></p> */}
                 {mealsearch.map(meals => 
                    <div className="divc3">
              <div className="imgc3">
              <img src={meals.strMealThumb}/>
              </div>
              <h4>{meals.strMeal}</h4>
               <p className="divc3head1">{meals.strCategory}.{meals.strArea}</p>
               {/* <a href="recipe.html?id={meals.idMeal}">View Details</a>     */}
                <Link to={`/recipe/${meals.idMeal}`}>View Details</Link>

           </div>
                  )}
              </div>
              </div>)}
          </div>
          
           <div id="hidecontainers3">
             {searchopen1 && (
                 <div>
                <h2>Popular Recipes</h2>
                <div class="containers3" id="containers3recipe"> 
                  {meal.map(meals => 
                    <div class="divc3">
              <div class="imgc3">
              <img src={meals.strMealThumb}/>
              </div>
              <h4>{meals.strMeal}</h4>
               <p className="divc3head1">{meals.strCategory}.{meals.strArea}</p>
               {/* <a href="recipe.html?id={meals.idMeal}">View Details</a>     */}
                <Link to={`/recipe/${meals.idMeal}`}> View Details</Link>
           </div>
                )}
               </div>
               </div>)}
           </div>
         <p id="carderror"></p>
    </section> 
    </>
  )
}
