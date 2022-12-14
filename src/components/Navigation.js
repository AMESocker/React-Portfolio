import React, { useState } from "react";
import Header from "./Header";
import About from "./pages/about";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/resume";
import "../App.css";
//Conditional Render
function Navigation() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "resume") {
      return <Resume />;
    }
    if (currentPage === "contact") {
      return <Contact />;
    }
    if (currentPage === "portfolio") {
      return <Portfolio />;
    }
    return <About />;
  };
  const pageChange = (page) => setCurrentPage(page);

  return (
    <div className='nav'>
      <Header currentPage={currentPage} pageChange={pageChange} />
      {renderPage()}
    </div>
  );
}
export default Navigation;
