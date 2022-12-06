import React from "react";
import "./Header.css";

function Header({ currentPage, pageChange }) {
  return (
    <div className="container">
      <nav className="navbar fixed-top navbar-expand-lg">
        <div className="container-fluid">
          <div className="navbar-brand">
            Aaron Socher
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {/*navtabs*/}
              <a
                className={
                  currentPage === "about" ? "nav-link active" : "nav-link"
                }
                aria-current="page"
                href="#aboutMe"
                onClick={() => pageChange("about")}
              >
                About Me
              </a>
              <a
                className={
                  currentPage === "portfolio" ? "nav-link active" : "nav-link"
                }
                href="#portfolio"
                onClick={() => pageChange("portfolio")}
              >
                Portfolio
              </a>
              <a
                className={
                  currentPage === "contact" ? "nav-link active" : "nav-link"
                }
                href="#contact"
                onClick={() => pageChange("contact")}
              >
                Contact
              </a>
              <a
                className={
                  currentPage === "resume" ? "nav-link active" : "nav-link"
                }
                href="#resume"
                onClick={() => pageChange("resume")}
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
    // <div className="App">
    //   <h1>Aaron Socher</h1>
    //   <header className="App-header"></header>
    // </div>
  );
}
export default Header;
