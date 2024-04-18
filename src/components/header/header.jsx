import React from "react";
import { Link } from "react-router-dom";
import LogoHeader from "../../favicons/logoHeader.png";
function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={LogoHeader} alt="Logo" />
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link fw-500  text-black" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-500  text-black" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link fw-500  dropdown-toggle text-black"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Services
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item text-black" to="#">
                      Service 1
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-black" to="#">
                      Service 2
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item text-black" to="#">
                      Service 3
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-500  text-black" to="#">
                  Case Study
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link bg-green fw-500 mr-0 btn text-white p-2 px-4"
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
