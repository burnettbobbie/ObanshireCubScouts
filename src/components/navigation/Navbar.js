import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../images/Frame 17.png";
import img2 from "../../images/Frame 19.png";
import img3 from "../../images/yellowArrow.png";
import img4 from "../../images/Frame 20.png";
import img5 from "../../images/purplecrop.png";
import Burger from "./Burger";
import Login from "../Login";

const Navbar = ({ pageTitle }) => {
  // State variables
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  // Toggle burger icon state
  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  // Open login form
  const handleOpenLoginForm = () => {
    setShowLoginForm(true);
  };

  // Close login form
  const handleCloseLoginForm = () => {
    setShowLoginForm(false);
  };

  return (
    <>
      {/* Mobile navigation */}
      <div className="mobile-nav">
        <div className="yellow-line"></div>
        <Link to="/">
          <img src={img4} alt="title" className="mob-title-heading" />
        </Link>

        <div className="burger-icon" onClick={toggleBurger}>
          <Burger isOpen={burgerOpen} />
        </div>

        {/* Mobile navigation links */}
        <div className="mobile-nav-links">
          <img src={img5} alt="logo" className="logo" />
          <button className="mobile-login" onClick={handleOpenLoginForm}>
            LOGIN
          </button>
          <Link to="/about">OBAN BRANCH</Link>
          <Link to="/volunteer">VOLUNTEER</Link>
          <Link to="/gallery">GALLERY</Link>
          <Link to="/cubscouts">SCOUT INFORMATION</Link>
          <Link to="/badges">BADGES</Link>
          <Link to="/cubcorner">CUB CORNER</Link>
        </div>
        
        {/* Login form modal */}
        {showLoginForm && (
          <div className='login-modal'>
            <div className="login-modal-content">
              <button className="modal-close" onClick={handleCloseLoginForm}>
                X
              </button>
              <Login />
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .mobile-nav-links {
          display: ${burgerOpen ? "flex" : "none"};
        }       
      `}</style>


      {/* Desktop navigation */}
      <div className="nav-wrap">
        <div className="nav-top">
          <img src={img} alt="logo" className='swing' />
          <Link to="/">
            <img src={img2} alt="title" className="title-heading" />
          </Link>
        </div>

        <div className="nav-bar">
          {/* Login button */}
          <div id="login-wrap">
            <div className="button-spacer"></div>
            <button className="login" onClick={handleOpenLoginForm}>
              LOGIN
              <img src={img3} alt="arrow" className="y-arrow" />
            </button>
            <h2 className="page-title">{pageTitle}</h2>
          </div>

          <div id="spacer"></div>

          {/* Navigation buttons */}
          <nav className="nav-buttons">
            
            {/* Cub Corner link */}
            <div className="dropdown cub-corner-nav">
              <Link to="/cubcorner">
                <button className="dropdown-btn">CUB CORNER</button>
              </Link>
            </div>
            {/* Oban Branch dropdown */}
            <div className="dropdown">
              <button className="dropdown-btn">
                OBAN BRANCH <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <Link to="/about">About</Link>
                <Link to="/volunteer">Volunteer</Link>
                <Link to="/gallery">Gallery</Link>
              </div>
            </div>

            {/* Scout Information dropdown */}
            <div className="dropdown">
              <button className="dropdown-btn">
                SCOUT INFORMATION <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <Link to="/cubscouts">About Scouts</Link>
                <Link to="/badges">Scout Badges</Link>
              </div>
            </div>

          </nav>
        </div>

        {/* Login form modal */}
        {showLoginForm && (
          <div className='login-modal'>
            <div className="login-modal-content">
              <button className="modal-close" onClick={handleCloseLoginForm}>
                X
              </button>
              <Login />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
