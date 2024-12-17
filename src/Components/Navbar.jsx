import React from 'react'
import '../assets/styles/Navbar.css'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
  let loc = useLocation()

  let bool = loc.pathname.startsWith('/adminportal')
  // console.log(bool)
  return (
    <>
    <div className="navbar">
        <div className="logo">B O O K S </div>
        <div className="links">
            {
              bool ?
              <ul>
                <li><NavLink to="/adminportal/">HOME</NavLink></li>
                <li><NavLink to="/adminportal/books">BOOKS</NavLink></li>
                <li><NavLink to="/adminportal/addbooks">ADD BOOKS</NavLink></li>
                <li><NavLink to="/adminportal/users">USERS</NavLink></li>
                <li><NavLink to="/adminportal/addusers">ADD USERS</NavLink></li>
                <li><NavLink to="/">LOGOUT</NavLink></li>
            </ul>
            :
            <ul>
                <li><NavLink to="/userportal/">HOME</NavLink></li>
                <li><NavLink to="/userportal/books">BOOKS</NavLink></li>
                <li><NavLink to="/userportal/users">USERS</NavLink></li>
                <li><NavLink to="/userportal/carditems">CARD ITEMS</NavLink></li>
                <li><NavLink to="/">LOGOUT</NavLink></li>
            </ul>
            }
        </div>
    </div>
    </>
  )
}

export default Navbar
