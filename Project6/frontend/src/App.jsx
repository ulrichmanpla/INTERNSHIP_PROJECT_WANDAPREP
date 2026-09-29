 import {Route, Routes, Navigate } from "react-router-dom"
import SignupLogin from "./component/SignupLogin"
import Homes from "./component/Homes"
import Dashboard from "./component/Dashboard"
import DetailsPage from "./component/DetailsPage"
const ProtectedRoute = ({children})=>{
    const token = localStorage.getItem('token')
    if(!token){
    return  <Navigate to="/" replace />
    }else{
      return children
    }
}
export default function App() {
  return (
    <> 
      <Routes>
           <Route path="/" element={<SignupLogin/>}/> 
             <Route path="/home" element={
                  <ProtectedRoute>
                    <Homes/>
                  </ProtectedRoute>
            }/>
          <Route path="*" element={<Navigate to="/"/>}/> 
          <Route path="/dashboard" element={<Dashboard/>}/> 
           <Route path="/detailpage/:id" element={<DetailsPage/>}/>
      </Routes>
    </>
  )
}
