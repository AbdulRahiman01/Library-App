import React, { useRef } from 'react'
import '../../assets/styles/addusers.css'

const AddUsers = () => {
    let formData = useRef()

    let addusers = (e) =>{
        e.preventDefault()

        let newUser = {
            username : formData.current[0].value,
            contact : formData.current[1].value,
            email : formData.current[2].value,
            password : formData.current[3].value,
            dob : formData.current[4].value,
            place : formData.current[5].value,

        }
        fetch('http://localhost:4000/users',{
            method:'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(newUser) 
        })
    }
  return (
    <>
        <div className="addusers">
            <h1>Addusers</h1>
            <div className="book-container">
                <form onSubmit={addusers} ref={formData}>
                    <div className="input-container">
                    <input type="text" placeholder='Enter User Name'/>
                    <input type="number" placeholder='Enter Phone Number'/>
                    <input type="email" placeholder='Enter Email id'/>
                    <input type="password" placeholder='Emter Password' disabled/ >
                    <input type="date" />
                    <input type="text" placeholder='Enter Place'/>
                    </div>
                    <button onClick={addusers} className='add-button'>Add Users</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default AddUsers
