import { Route, Routes } from "react-router-dom"
 import Homepage from "../mainsections/Homepage"
import RecipeDetails from "../mainsections/RecipeDetails"



export default function Routers() {
  return (
    <>
         <Routes>
             <Route path="/" element={<Homepage/>}/>       
             <Route path="/recipe/:id" element={<RecipeDetail/>}/>       
         </Routes>       
    </>
  )
}
