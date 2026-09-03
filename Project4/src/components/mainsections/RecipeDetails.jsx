import './recipe.css'
import './recipemedia.css'
import  Navbar from '../navbar/Navbar'
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const baseURL = "https://www.themealdb.com/api/json/v1/1";

export default function RecipeDetails({ random = false }) {

  
  const { id } = useParams();

  const [meal, setMeal] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {

    async function loadFullRecipe() {

      try {

        setLoading(true);
        setError("");

        let fetchURL = "";

        
        if (random) {

          fetchURL = `${baseURL}/random.php`;

        }

        else if (id) {

          fetchURL = `${baseURL}/lookup.php?i=${id}`;

        }


        else {

          setError("No recipe selected");
          setLoading(false);
          return;

        }


        const response = await fetch(fetchURL);

        if (!response.ok) {
          throw new Error("Could not find this recipe");
        }

        const data = await response.json();

        if (!data.meals || data.meals.length === 0) {
          throw new Error("Recipe not found");
        }

        setMeal(data.meals[0]);

      } catch (error) {

        console.error(error);

        setError(error.message);

      } finally {

        setLoading(false);

      }
    }

    loadFullRecipe();

  }, [id, random]);


  if (loading) {

    return (
      <div className="recipe-loading">
        <p>Loading complete recipe...</p>
      </div>
    );

  }



  if (error) {

    return (
        
      <div className="recipe-error">

        <p>
          {error}
        </p>

        <Link to="/">
          Back to Home
        </Link>

      </div>
    );

  }


  

  if (!meal) {
    return null;
  }



  const ingredients = [];

  for (let i = 1; i <= 20; i++) {

    const ingredient =
      meal[`strIngredient${i}`];

    const measure =
      meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {

      ingredients.push({
        ingredient: ingredient,
        measure: measure || ""
      });

    }

  }


  return (
      <>
      <Navbar/>
       <div id="recipedetails">
     
    <div className="details">


      <div className="header1">

        <div>

          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            width="200"
          />

        </div>


        <div>

          <h3>
            RECIPE DETAILS
          </h3>

          <h1>
            {meal.strMeal}
          </h1>

          <p className="p1">

            <strong>
              Category:
            </strong>{" "}

            {meal.strCategory}

          </p>


          <p className="p2">

            <strong>
              Origin:
            </strong>{" "}

            {meal.strArea}

          </p>

        </div>

      </div>


      <div className="header12">



        <div>

          <h2>
            Ingredients
          </h2>

          <ul>

            {ingredients.map((item, index) => (

              <li key={index}>

                <span className="li1">
                  {item.ingredient}
                </span>

                <span className="li2">
                  {item.measure}
                </span>

              </li>

            ))}

          </ul>

        </div>



        <div>

          <h2>
            How to Prepare
          </h2>

          <p className="instructions">
            {meal.strInstructions}
          </p>

        </div>

      </div>


      

      <div className="youtubevideo">

        <h4>
          Watch The Recipe
        </h4>


        {meal.strYoutube ? (

          <a
            href={meal.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#FFFFFF"
            >

              <path
                d="m380-340 280-180-280-180v360Zm-60 220v-80H160q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v480q0 33-23.5 56.5T800-200H640v80H320ZM160-280h640v-480H160v480Zm0 0v-480 480Z"
              />

            </svg>

            <span className="spanvideo">
              Watch on Youtube
            </span>

          </a>

        ) : (

          <p>
            No YouTube video available.
          </p>

        )}

      </div>
    </div>
    </div>
   </>
  );
}