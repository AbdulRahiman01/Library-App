import React from 'react'
import '../assets/styles/home.css'

const Home = () => {
  return (
    <div className="home-page">
      <div className="welcome-section">
        <h2>Welcome to the Library</h2>
        <p>Manage books in this library.</p>
        <button>Explore Books</button>
      </div>

      <div className="quick-links">
        <h3>Quick Links.</h3>
        <div className="card-container">
          <div className="card">
            <h4>View Books</h4>
            <p>Click Here</p>
          </div>
          <div className="card">
            <h4>Manage Members</h4>
            <p>Manage library members.</p>
          </div>
          <div className="card">
            <h4>Records</h4>
            <p>history and returns.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
