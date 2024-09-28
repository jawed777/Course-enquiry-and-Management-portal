// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './Components/Login'
import Register from './Components/register'
// eslint-disable-next-line no-unused-vars
import NavBar from './Components/navbar';
import Adminlogin from './Components/Adminlogin';
import Homepage from './Components/Homepage';
import Adminregister from './Components/Adminregister';
import Userhome from './Components/Userhome';
import Cources from './Components/Courses';
import './App.css'
import Enquiry from './Components/Enquiry';
import About from './Components/About';
import Admhome from './Components/Admhome';
import Addcourse from './Components/Addcourse';
import Subscribe from './Components/Subscribe';
import Enrolledcourse from './Components/Enrolledcourse';
import Viewenquiry from './Components/Viewenquiry';
import Updatecourse from './Components/Updatecourse';
import DeleteCourse from './Components/DeleteCourses';
import Deleteenquiry from './Components/Deleteenquiry';
function App () {
  return (
     <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' exact element={<Homepage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>} />
            <Route path="/Adminlogin" element={<Adminlogin/>}/>
            <Route path='/Adminregister' element={<Adminregister/>}/>
            <Route path='/Userhome' element={<Userhome/>}/>
            <Route path='/Courses' element={<Cources/>}/>
            <Route path='/enquiry' element={<Enquiry/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/admhome' element={<Admhome/>}/>
            <Route path='/addcourse' element={<Addcourse/>}/>
            <Route path='/subs' element={<Subscribe/>}/>
            <Route path='/enrolledcourse' element={<Enrolledcourse/>}/>
            <Route path='/Viewenquiry' element={<Viewenquiry/>}/>
            <Route path='/updatecourse' element={<Updatecourse/>}/>
            <Route path='/Deletecourse' element={<DeleteCourse/>}/>
            <Route path='/Deleteenquiry' element={<Deleteenquiry/>}/>
          </Routes>
      </BrowserRouter>

       {/* <Homepage/> */}

      {/* <Adminlogin/> */}
       {/* <Login></Login>
    
       <Register></Register> */}

    </div>
  )
}

export default App