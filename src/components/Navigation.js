import React, { useState } from "react";
import Header from "./Header";
import About from "./pages/about";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/resume";
//Conditional Render
function Navigation() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "contact") {
      return <Contact />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    return <Resume />;
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
export default Navigation;
