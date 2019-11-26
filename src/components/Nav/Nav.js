import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="cc-nav">
      <div className="nav-wrapper container">
        <h1 className="home-logo">ChitChat</h1>

        <div className="nav-links">
          <ul>
            {/* needs to logout and return home */}
            <Link to="/register">
              <li>Logout</li>
            </Link>
            {/* needs to link to profile */}
            <Link to="/register">
              <li>UserName</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav
