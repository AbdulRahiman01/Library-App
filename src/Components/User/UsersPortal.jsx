import React from 'react'
import Navbar from '../Navbar'
import { Route, Routes } from 'react-router-dom'
import Books from '../Books'
import Home from '../Home'
import Users from '../Users'
import ReadBooks from '../ReadBooks'
import CardItems from './CardItems'

const UsersPortal = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route element={<Home/>} path='/' />
          <Route element={<Books/>} path='/books'/>
          <Route element={<Users/>} path='/users'/>
          <Route element={<ReadBooks/>} path='/readbooks/:id'/>
          <Route element={<CardItems/>} path='cartitems'/>
      </Routes>
    </div>
    </>
  )
}

export default UsersPortal
