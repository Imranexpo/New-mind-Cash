import React from 'react'
import LoginForm from './Components/loginForm'
import Registration from './Components/Registration';
import StudentDashboard from './pages/StudentDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginForm/>}></Route>
      <Route path='/Registration' element={<Registration/>}></Route>
      <Route path='/StudentDash' element={<StudentDashboard/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
