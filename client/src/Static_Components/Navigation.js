import React from 'react'
import './Static.css'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <div id="navbar">
      <h1 className="logo">
        <span className="text-primary"><i className="fas fa-book-open"></i> Trading</span>Stocks</h1>
      <nav>
        <ul>
          <NavLink exact to='/' activeClassName="current">
            <li>Home</li>
          </NavLink>
          <NavLink exact to='/main' activeClassName="current">
            <li>Trade</li>
          </NavLink>
          <NavLink exact to='/report' activeClassName="current">
            <li>Portfolio</li>
          </NavLink>
          <li>Login</li>
          <li>Register</li>
        </ul>
      </nav>
    </div>
  )
}
