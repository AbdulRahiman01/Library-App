import axios from 'axios'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UsersLogin = () => {
    let [users,setUsers] = useState([])
    let FormData = useRef()
    let fetchUsers = async ()=>{
        let userdata = await axios.get('http://localhost:4000/users')
        setUsers(userdata.data)
    }
    fetchUsers()
    // console.log(users);
    
    
    let usersEmail = users.map(elem => elem.email)
    // console.log(usersEmail);
    let navigate = useNavigate()
    
    let handleLogin = (e)=>{
        e.preventDefault()
        let emailVal = FormData.current[0].value
        let pswdVal = FormData.current[1].value
    
        let email = usersEmail.includes(emailVal)
        let pswd = (pswdVal === 'user123')

        if(email && pswd){
            navigate('/userportal')
        }
        else{
            alert('Invalid Credentials')
        }
    }

    
    return (
        <>
            <div className="users-login">
                <h2>User Login Page</h2>
                <div className="form-box">
                    <form action="" ref={FormData} onSubmit={handleLogin}>
                        <input type="email" placeholder='Enter Email' />
                        <input type="password" placeholder='Enter Password' />
                        <button>
                            USERS LOGIN
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UsersLogin
