import React from "react";
import { Link } from "react-router-dom";

const Navbar=()=> {
  
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-primary border-bottom border-bottom-dark" data-bs-theme="dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              NewZify
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
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/general">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    Technology
                  </Link>
                </li>
                {/* <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li> */}
              </ul>
              {/* <div class=" d-flex btn-group me-2" role="group" aria-label="Second group">
              <button type="button" class="btn btn-outline-light">au</button>
              <button type="button" class="btn btn-outline-light">us</button>
              <button type="button" class="btn btn-outline-light">in</button>
              <button type="button" class="btn btn-outline-light">fr</button>
            </div> */}
            </div>
          </div>
        </nav>
      </div>
    );
  
}

export default Navbar;
