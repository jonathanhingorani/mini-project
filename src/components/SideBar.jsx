import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='sidebar'>
        <h1>Sidebar</h1>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/about">
        <button>About us</button>
      </Link>
    </div>
  )
}

export default SideBar