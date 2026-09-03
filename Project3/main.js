
const baseURL="https://www.themealdb.com/api/json/v1/1"

  //surprise button
    const surprisebtn=document.getElementById("surprisebutton")
    if(surprisebtn){
          surprisebtn.innerHTML=` <a href="recipe.html?random=true" style="text-decoration:none; color:white;">Surprise Me</a>`

      }
     // different categories
const category= document.getElementById("category")
const categoryerror= document.getElementById("categoryerror")
const categorycontainer=document.getElementById("categorycontainer1")
const hidecontainer=document.getElementById("hidecontainers3")

async function fetchCategories() {
    try{
    const response1= await fetch(`${baseURL}/categories.php`)
    if(!response1.ok){
        throw new Error ("API failed")
    }
    const data1= await response1.json()

    const  datacategories= data1.categories.map((n1)=>
         `
         <div class="divc1 category-card" data-category="${n1.strCategory}">
         <h3>${n1.strCategory}</h3>
         </div>
         `
    ).join("")
    category.innerHTML=datacategories
setupCategoryClick()
}
    catch(err){
     categoryerror.innerHTML = `<p style="color: red;">Failed to display categories: ${err.message}</p>`;
    
    }n

}
fetchCategories()

function setupCategoryClick(){
    const cards= document.querySelectorAll(".category-card")

    cards.forEach(card =>{
         card.addEventListener("click", async(e)=>{
            const selectedCategory = e.currentTarget.getAttribute("data-category")

            console.log (`user clicked on category: ${selectedCategory}`)
            
             if(hidecontainer){
                hidecontainer.style.display="none"
             }
            await fetchMealsByCategory(selectedCategory)
         })
    })
}
async function fetchMealsByCategory(categoryName){
    try{
          categorycontainer.innerHTML=`<p> loading ${categoryName} meals....</p>`
          const response4 = await fetch(`${baseURL}/filter.php?c=${encodeURIComponent(categoryName)}`)

          if(!response4.ok){
             throw new Error ("Failed to fetch meals for this category")
          }
          const data4 = await response4.json()
          const meals = data4.meals
       
          if(meals.length ===0){
            categorycontainer.innerHTML =`<p style="color:red;">No meal found for ${categoryName}.</p>`
            return
          }
            
          categorycontainer.innerHTML=meals.map((meal)=>
          ` 
           <div class="divc3">
              <div class="imgc3">
              <img src="${meal.strMealThumb}">
              </div>
              <h4 style="font-size:15px; margin-bottom:10px">${meal.strMeal}</h4>
               <a href="recipe.html?id=${meal.idMeal}" class="view-btn">View Details</a>    
           </div>
           `
        ).join("")
        
    }catch(error){
       categorycontainer.innerHTML=`<p style="color:red;">Error: ${error.message}</p>`
    }
}

//card Recipes
 const recipesCard= document.getElementById("containers3recipe")
 const  carderror= document.getElementById("carderror")
async function foodmeals() {
    try{

        const response2 = await fetch(`${baseURL}/search.php?s=chicken `)
          if(!response2.ok){
           throw new Error ("API failed")
          }
         const data2 = await response2.json()
           const mealcard= data2.meals.map((n2,ind1)=>
          ` 
           <div class="divc3">
              <div class="imgc3">
              <img src="${n2.strMealThumb}">
              </div>
              <h4>${n2.strMeal}</h4>
               <p class="divc3head1">${n2.strCategory}.${n2.strArea}</p>
               <a href="recipe.html?id=${n2.idMeal}">View Details</a>    
           </div>
           `
        ).join("")
        recipesCard.innerHTML=mealcard
           
         console.log(data2)
    }catch(err){
        console.log(err)
        carderror.innerHTML=`<p>failed to load meal card:${err}</p>`
    }

}
foodmeals()

// search js
const form= document.getElementById("searchform")
const input=document.getElementById("inputform")
const searchcontainer=document.getElementById("searchs3container")
const  formbtn= document.getElementById("formbutton")
const  c3error= document.getElementById("contaiter31error")
const  head31=document.getElementById("headc31")
async function searchRecipes(query){
    try{
         const response3 = await fetch(`${baseURL}/search.php?s=${encodeURIComponent(query)}`)
         if(!response3.ok){
            throw new Error("Response3 API failed")
         }

         const data3 = await response3.json()
        
          return data3.meals || []
    }catch(err){
      c3error.innerHTML=`
       <p> search failed: ${err}</p>
      `
      return []
    }
}

function searchdisplay2(mealsList){
        if(mealsList.length===0 ){
             head31.innerHTML=` <p style="color:red;">No recipes found. Please Enter the Correct Recipe Name</p>`
        }
     searchcontainer.innerHTML=mealsList.map((n2,ind1)=>
          ` 
           <div class="divc3">
              <div class="imgc3">
              <img src="${n2.strMealThumb}">
              </div>
              <h4>${n2.strMeal}</h4>
               <p class="divc3head1">${n2.strCategory}.${n2.strArea}</p>
               <a href="recipe.html?id=${n2.idMeal}">View Details</a>    
           </div>
           `
        ).join("")
}

form.addEventListener("submit", async function(e) {
     e.preventDefault()
     
     const inputvalue = input.value.trim()

     if(inputvalue === ""){
          alert(" please enter the  Recipe name")
          return
     }
      
     head31.innerHTML=`<div> Search for: "<span>${inputvalue.toUpperCase()}</span>"</div>`
     c3error.innerHTML =`<p style=" color:red; "> Searching Recipes....</p>`
     const fetchMeals = await  searchRecipes(inputvalue)
     searchdisplay2(fetchMeals)
     hidecontainer.style.display="none"
      categorycontainer.style.display="none"
     
})