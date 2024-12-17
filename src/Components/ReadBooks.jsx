import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../assets/styles/readbooks.css'

const ReadBooks = () => {
  let params = useParams()
  let bookId = params.id
  let [bookData, setBookdata] = useState({})
  let fetchBookId = async () => {
    let fetchBook = await axios.get(`http://localhost:4000/books/${bookId}`)
      setBookdata(fetchBook.data)
  }
  fetchBookId()
  let { title, longDescription, thumbnailUrl, isbn, pageCount, status, authors, categories, shortDescription } = bookData;
  return (
    <>
      <div className="read-books">
        <div className="header">
          <h4>About {categories}</h4>
        </div>
        <div className="card">
          <div className="read-img">
            <img src={thumbnailUrl} alt="" />
          </div>
          <div className="desc">
            <div className="data-section">
              <table>
                <tr>
                  <th>categories:</th>
                  <td>{categories}</td>
                </tr>
                <tr>
                  <th>authors:</th>
                  <td>{authors}</td>
                </tr>
                <tr>
                  <th>Reg no:</th>
                  <td>{isbn}</td>
                </tr>
                <tr>
                  <th>status:</th>
                  <td>{status}</td>
                </tr>
                <tr>
                  <th>pageCount:</th>
                  <td>{pageCount}</td>
                </tr>
              </table>
            </div>
            <div className="shortdesc">
              <h3>Short Description:</h3>
              {shortDescription}
            </div>
            <div className="description">
              <h3>Long Description:-</h3>
              {longDescription}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReadBooks
