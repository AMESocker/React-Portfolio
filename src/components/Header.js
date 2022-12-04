import React from "react";

function Header({ currentPage, handlePageChange }) {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Aaron Socher
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a className={currentPage === 'aboutMe' ? 'nav-link active' : 'nav-link'} aria-current="page" href="#aboutMe" onClick={() => handlePageChange('aboutMe')}>
                About Me
              </a>
              <a class="nav-link" href="#">
                Portfolio
              </a>
              <a class="nav-link" href="#">
                Contact
              </a>
              <a class="nav-link disabled">
                Resume</a>
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
