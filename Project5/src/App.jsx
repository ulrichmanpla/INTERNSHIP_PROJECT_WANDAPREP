import { Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import  Home from "./components/maincomponent/homepage/Homes"
import Course from "./components/maincomponent/course/Course"
import CourseDetails from "./components/maincomponent/coursedetails/CourseDetails"
import Teacher from "./components/maincomponent/teacher/Teacher"
import TeacherDetails from "./components/maincomponent/teachdetails/TeacherDetails"
import Signup from "./components/maincomponent/signup/Signup"
import Login from "./components/maincomponent/login/Login"
 import { useState } from "react"
 
 export default function App() {
   const [selectcourse, setSelectCourse]=useState("")
  return (
     <>
        <Navbar selectcourse={selectcourse} setSelectCourse={setSelectCourse}/>
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/course" element={<Course selectcourse={selectcourse} setSelectCourse={setSelectCourse}/>}/>
          <Route path="/teacher" element={<Teacher/>}/>
          <Route path="/coursedetails" element={<CourseDetails/>}/>
          <Route path="/teacherdetails" element={<TeacherDetails/>}/>        
          <Route path="/signup" element={<Signup/>}/>        
          <Route path="/login" element={<Login/>}/>        
       </Routes>
      </>
  )
}
