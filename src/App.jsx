import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import AdminPortal from './Components/Admin/AdminPortal'
import UsersPortal from './Components/User/UsersPortal'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage/>}path='/'/>
          <Route element={<AdminPortal/>}path='/adminportal/*'/>
          <Route element={<UsersPortal/>}path='/userportal/*'/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App