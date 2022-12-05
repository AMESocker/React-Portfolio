import React from "react";

function Header({ currentPage, handlePageChange }) {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Aaron Socher
          </a>
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
              <a className={currentPage === 'aboutMe' ? 'nav-link active' : 'nav-link'} aria-current="page" href="#aboutMe" onClick={() => handlePageChange('aboutMe')}>
                About Me
              </a>
              <a className={currentPage === 'portfolio' ? 'nav-link active' : 'nav-link'} href="#portfolio" onClick={() => handlePageChange('portfolio')}>
                Portfolio
              </a>
              <a className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'} href="#contact" onClick={() => handlePageChange('contact')}>
                Contact
              </a>
              <a className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'} href="#resume" onClick={() => handlePageChange('resume')}>
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
