import React, { useState } from 'react'
import '../assets/styles/landingpage.css'
import AdminLogin from './Admin/AdminLogin'
import UsersLogin from './User/UsersLogin'

const LandingPage = () => {
    let[bool ,setBool]=useState(true)
    let handlebtn = () =>{
        setBool(!bool)
    }
  return (
    <>
        <div className="landingpage">
            <div className="login-container">
                <div className="header">LOGIN PAGE</div>
                <div className="btn-box">
                    <button onClick={handlebtn} className={bool ? 'ryt-btn' : 'lft-btn'}>
                        {bool? "Admin" : "User"}
                    </button>
                </div>
                <div className="form-box">
                    {bool?<AdminLogin/>:<UsersLogin/>}
                </div>
            </div>
        </div>
    </>
  )
}

export default LandingPage
