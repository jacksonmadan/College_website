import React from 'react'
import './Navbar.css'
import assest from '../assest/img/1.jpeg';
import { Link } from 'react-router-dom';

export default function navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg" id="nav">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
    <img src={assest} alt="Logo"   className="logo" />
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/Academic">ACADEMICS</Link>
        </li>
        <li className="nav-item">
          <Link to="Admission">ADMISSION</Link>
        </li>
        <li className="nav-item">
          <Link to="courses">COURSES</Link>
        </li>
        
        <li className="nav-item">
          <Link to="/aboutus">ABOUT US</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

