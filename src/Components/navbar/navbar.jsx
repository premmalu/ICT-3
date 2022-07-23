import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-primary">
      <div className="container px-3">
        <nav class="navbar navbar-expand-lg navbar-dark navigation-bar">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/" onClick={scrollToTop}>
              <h1>BOOKY</h1>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse navmen"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav  mb-2 mb-lg-0 ">
                <li class="nav-item">
                  <Link class="nav-link active" onClick={scrollToTop} to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" onClick={scrollToTop} to="/login">
                    Login
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" onClick={scrollToTop} to="/register">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
