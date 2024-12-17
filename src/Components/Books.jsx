import React, { useState } from 'react'
import '../assets/styles/books.css'
import { useLocation, useNavigate } from 'react-router-dom'

const Books = () => {
    let [books, setBooks] = useState([])

    let fetchapi = async () => {
        let fetchApi = await fetch('http://localhost:4000/books')
        let apidata = await fetchApi.json()
        setBooks(apidata)

    }
    fetchapi()
    // console.log(books);
    let navigate = useNavigate()
    let loc = useLocation()
    let bool = loc.pathname.startsWith('/adminportal')
    let readmore = (id) => {
        if(bool)
            navigate(`/adminportal/readbooks/${id}`)
        else
        navigate(`/userportal/readbooks/${id}`)
    }

    let deleteBook = (id ,title )=>{
        let bool  = window.confirm(`do you want to delete ${title} book`)
        if(bool){
        fetch(`http://localhost:4000/books/${id}`,{method : 'DELETE'})
        alert(`Book is deleted`)    
        }
        else{
            alert(`book is not deleted`)
        }
    }

    return (
        <>
            <div className="books">
                <div className="header">
                    <h1>Books</h1>
                </div>
                <div className="container">
                    {
                        books.map((elem) => {
                            let { id, title, isbn, pageCount, thumbnailUrl, longDescription, status, authors, categories } = elem
                            return (
                                <>
                                    <div className="cards">
                                        <div className="img-photo">
                                            <tr>
                                                <th>
                                            <div ><img src={thumbnailUrl} /></div>
                                            <div className='title-photo'>{title}</div>

                                                </th>
                                            </tr>
                                        </div>
                                        <div className='title'>{title}</div>
                                        <div className="data">
                                            <table>
                                                <tr>
                                                    <th>Categories:</th>
                                                    <td>{categories}</td>
                                                </tr>
                                                <tr>
                                                    <th>Author:</th>
                                                    <td>{authors}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Id:</th>
                                                        <td>{id}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>status:</th>
                                                        <td>{status}</td>
                                                    </tr>
                                                    <br />
                                                    <button onClick={() => readmore(id)} className='btn-lft'>Read More</button>
                                                    {
                                                        bool?
                                                    <button onClick={() => deleteBook(id,title)} className='btn-rght' >Delete</button>
                                                    :
                                                    <button className='btn-rght'>Add to Cart</button>

                                                    }
                                            </table>

                                        </div>
                                    </div>
                                </>
                            )

                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Books