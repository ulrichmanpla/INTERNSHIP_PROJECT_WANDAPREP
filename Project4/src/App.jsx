import { BrowserRouter, Route,Routes } from "react-router-dom"

import  RecipeDetails from "./components/mainsections/RecipeDetails"
import Homepage from "./components/mainsections/Homepage"

export default function App() {
  return (
    <>
         <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Homepage/>}/>
                  <Route path="/recipe/:id" element={<RecipeDetails/>}/>
                  
              </Routes>
         </BrowserRouter>
    </>
  )
}
