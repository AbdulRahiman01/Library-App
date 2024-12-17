import React, { useRef } from 'react'
import '../../assets/styles/addbooks.css'

const AddBooks = () => {
  let formData = useRef()
  let inputRef = useRef()

  let handleSubmit = (e) =>{
    e.preventDefault(inputRef.current.id)

    let newBook = {
      id: formData.current[0].value,
      title :formData.current[1].value,
      isbn : formData.current[2].value,
      pageCount : formData.current[3].value,
      thumbnailUrl:formData.current[4].value,
      shortDescription:formData.current[5].value,
      longDescription:formData.current[6].value,
      status:formData.current[7].value,
      authors:formData.current[8].value,
      categories:formData.current[9].value
    }
    fetch('http://localhost:4000/books',{
      method : 'POST',
      headers : {'Content-type': 'application/json'},
      body : JSON.stringify(newBook)
    })
  }
  return (
    <>
    <div className="addbooks">
        <h2>Add Books</h2>
        <div className="book-container">
            <form ref={formData} className='form-container'>
                <input type="text" ref={inputRef} placeholder='Enter Title of the Book' />
                <input type="text" placeholder='Enter Reg No of the Book' />
                <input type="text" placeholder='Enter PageCount of the Book' />
                <input type="text" placeholder='Enter Image URL of the Book' />
                <input type="text" placeholder='Enter Short Desc of the Book' />
                <input type="text" placeholder='Enter Long Desc of the Book' />
                <input type="text" placeholder='Enter status of the Book' />
                <input type="text" placeholder='Enter Author of the Book' />
                <input type="text" placeholder='Enter Categories of the Book' />
            </form>
            <button onClick={handleSubmit} className='book-btn'>Add Books</button>
        </div>
    </div>
    </>
  )
}

export default AddBooks
