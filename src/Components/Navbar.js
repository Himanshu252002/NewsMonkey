import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar fixed-top navbar-expand-lg bg-body-tertiary data-bs-theme=dark "
      data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          NewsMonkey
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Country
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/in">
                      Indian
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/us">
                      USA News
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/sa">
                      {" "}
                      South africa
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/au">
                      Australia
                    </Link>
                  </li>
                </ul>
              </li>
            }
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/business">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/health">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/science">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/technology">
                Technology
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
