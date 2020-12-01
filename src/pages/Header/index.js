import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

export default function Header() {
  return (
    <div className="container">
      <div className="menu">
        <Link className="lista" to="/">
          Home
        </Link>
        <Link className="lista" to="/register">
          Regsiter
        </Link>
        {'       '}
        <Link className="lista" to="/update">
          Update
        </Link>
      </div>
    </div>
  )
}
