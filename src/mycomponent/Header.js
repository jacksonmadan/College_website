import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <div className="firstnav">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              FOR CURRENT STUDENTS{" "}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    FOR FACULTY &amp; STAFF
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/Apply">
                    APPLY
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    PLACEMENT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    GALLERY
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    DEPARTMENTS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    CHAT WITH US
                  </Link>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>


    </div>
  )
}
