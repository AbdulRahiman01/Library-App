import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    let adminform = useRef()
    let navigate = useNavigate()
    let handleAdminform = (e) =>{
        e.preventDefault()

        let adminVal = adminform.current[0].value
        let pswVal = adminform.current[1].value

        let adminCredential = {
            admin : "admin@gmail.com",
            password : "admin123" 
        }

        let{admin,password} = adminCredential

        if(adminVal === admin && pswVal === password){
           navigate('./adminportal') 
        }
        else{
            alert("Invalid Credential")
        }
    }
    return (
        <>
            <div className="admin-login">
                <h2>Admin Login Page</h2>
                <div className="form-box">
                    <form action="" ref={adminform} onSubmit={handleAdminform}>
                        <input type="email" placeholder='Enter Email' />
                        <input type="password" placeholder='Enter Password' />
                        <button>
                            ADMIN LOGIN
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminLogin
