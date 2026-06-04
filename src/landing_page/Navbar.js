import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      style={{
        backgroundColor: "#08264A",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        minHeight: "75px",
      }}
    >
      <div className="container">

        {/* Logo */}
       <Link className="navbar-brand m-0" to="/">
  <img
    src="media/images/gem logo.png"
    alt="GrowVest"
    style={{
      height: "55px",
      width: "auto",
      display: "block"
    }}
  />
</Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span
            style={{
              color: "white",
              fontSize: "28px",
            }}
          >
            ☰
          </span>
        </button>

        {/* Nav Links */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">

            <li className="nav-item">
              <Link className="nav-link nav-custom" to="/signup">
                Signup
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-custom" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-custom" to="/product">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-custom" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-custom" to="/support">
                Support
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;