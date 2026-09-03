const recipeDetails = document.getElementById("recipedetails");
const baseURL = "https://www.themealdb.com/api/json/v1/1";

async function loadFullRecipe() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        
        const mealId = urlParams.get("id");
        const randomMeal =urlParams.get("random")
         let fetchURL= ""
         if(randomMeal ==="true"){
            fetchURL = `${baseURL}/random.php`
         }else if(mealId){

            fetchURL=`${baseURL}/lookup.php?i=${mealId}`
         }else{
            recipeDetails.innerHTML = "<p> No recipe selected</p>";
            return;
         }
       

        recipeDetails.innerHTML = "<p> Loading complete recipe...</p>";

        const response = await fetch(fetchURL);
        if (!response.ok) throw new Error("Could not find this recipe");

        const data = await response.json();
        
        const meal = data.meals[0]; 

       let ingredientsHTML =""
    for (let i=1; i<=20; i++){
        const ingredient = meal[`strIngredient${i}`]
        const measure =meal[`strMeasure${i}`]


        if( ingredient.trim() !== ""){
            ingredientsHTML +=`
              <li> 
                <span class="li1"> ${ingredient}</span> <span class="li2">${measure ? measure : ""}</span>
               </li>
            `
        }
    }
    
        recipeDetails.innerHTML = `
        <div class="details">
            <div class="header1">
                <div>
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}" width="200px">
                </div>
                <div>
                     <h3>RECIPE DETAILS<h3>
                    <h1>${meal.strMeal}</h1>
                    <p class="p1"><strong>Category:</strong> ${meal.strCategory}</p>
                    <p class="p2"><strong>Origin:</strong> ${meal.strArea}</p>
                </div>
            </div>

        <div class="header12">
          <div>
           <h2>Ingredients</h2>
          <ul>
          ${ingredientsHTML}
          </ul>
        </div>
           <div>
            <h2>How to Prepare</h2>
           <p class="instructions">${meal.strInstructions}</p>
           </div>
           </div>
             <div class="youtubevideo">
             <h4>Watch The Recipe</h4>
            <a href="${meal.strYoutube}"> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m380-340 280-180-280-180v360Zm-60 220v-80H160q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v480q0 33-23.5 56.5T800-200H640v80H320ZM160-280h640v-480H160v480Zm0 0v-480 480Z"/></svg>
            <span class="spanvideo">Watch on Youtube</span></a>
            </div>
            </div>
        `;

    } catch (error) {
        console.error(error);
        recipeDetails.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    }
}
loadFullRecipe();


const svg1= document.getElementById("svg1")
const svg2= document.getElementById("svg2")
const navlink= document.getElementsByClassName("navlink")[0]


function hidebar(){
     navlink.style.display="none"
}
function showbar(){
    navlink.style.display="flex"
}
