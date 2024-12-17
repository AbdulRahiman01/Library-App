import axios from 'axios'
import React, { useState } from 'react'
import '../assets/styles/users.css'
import { useLocation } from 'react-router-dom'

const Users = () => {
    let [users, setUsers] = useState([])
    let fetchUsers = async () => {
        let fetchuserData = await axios.get('http://localhost:4000/users')
        await setUsers(fetchuserData.data)
    }
    fetchUsers()
    // console.log(users)
    let deleteUser = (id)=>{
        let bool  = window.confirm(`do you want to delete the user`)
        if(bool){
        fetch(`http://localhost:4000/users/${id}`,{method : 'DELETE'})
        alert(`User Details is deleted`)    
        }
        else{
            alert(`User Details is not deleted`)
        }
    }
    let loc = useLocation()
    let bool = loc.pathname.startsWith('/adminportal')
    return (
        <>
            <div className="users">
                <h1>Users</h1>
                <div className="user-container">
                    <table border={1}>
                        <thead>
                            <tr>
                                <th>Sl no</th>
                                <th>User Name</th>
                                <th>Contact</th>
                                {bool && <th>Email</th>}
                                {bool && <th>Password</th>}
                                <th>Date of Birth</th>
                                <th>Age</th>
                                <th>Place</th>
                                {bool && <th>Delete User</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((elem,index) => {
                                    let { username, contact, email, password, dob, place, id } = elem;
                                    let dateObj = new Date()
                                    let age = dateObj.getFullYear() -  dob.slice(0,4)
                                    return(
                                        <tr>
                                            <td>{index+1}</td>
                                            <td>{username}</td>
                                            <td>{contact}</td>
                                            {bool && <td>{email}</td>}
                                            {bool && <td>{password}</td>}
                                            <td>{dob}</td>
                                            <td>{age}</td>
                                            <td>{place}</td>
                                            {bool &&
                                            <td><button onClick={() => deleteUser(id)} className='user-button'>Delete</button></td>
                                            }
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Users
