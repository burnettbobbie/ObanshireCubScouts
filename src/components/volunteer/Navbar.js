import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Burger from '../../components/navigation/Burger';
import img from '../../images/Frame 17.png';
import img2 from '../../images/Frame 19.png';
import img4 from '../../images/Frame 20.png';
import img5 from '../../images/purplecrop.png';

const VolNav = ({ pageTitle }) => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmed = window.confirm('Are you sure you want to logout?');
    if (confirmed) {
      // Clear user session by removing the access token from local storage
      localStorage.removeItem('accessToken');

      // Redirect the user to the login page
      navigate('/');
    }
  };

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
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
          <button className="mobile-login" onClick={handleLogout}>
            LOGOUT
          </button>
          <Link to="/dashboard">DASHBOARD</Link>
          <Link to="/dashboard/my-profile">PROFILE</Link>
          <Link to="/dashboard/training/about">TRAINING</Link>
          <Link to="/dashboard/training/code-of-conduct">CODE OF CONDUCT</Link>
          <Link to="/dashboard/training/useful-links">USEFUL LINKS</Link>
        </div>
      </div>

      <style jsx>{`
        .mobile-nav-links {
          display: ${burgerOpen ? 'flex' : 'none'};
        }
      `}</style>

      {/* Desktop navigation */}
      <div className="nav-wrap">
        <div className="nav-top">
          <img src={img} alt="logo" className="swing" />
          <img src={img2} alt="title" className="title-heading" />
        </div>

        <div className="nav-bar">
          <div id="login-wrap">
            <Link to="/dashboard" className="dashboard-link">
              <h1>VOLUNTEER DASHBOARD</h1>
            </Link>
          </div>
          <h6 className="back-page-title">{pageTitle}</h6>

          <div className="spacer"></div>

          {/* Navigation buttons */}
          <nav className="nav-buttons">
            {/* Profile */}
            <div className="dropdown">
              <Link to="/dashboard/my-profile">
                <button className="dropdown-btn">PROFILE</button>
              </Link>
            </div>

            {/* Training dropdown */}
            <div className="dropdown">
              <button className="dropdown-btn">
                TRAINING <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <Link to="/dashboard/training/about">About</Link>
                <Link to="/dashboard/training/code-of-conduct">Code of Conduct</Link>
                <Link to="/dashboard/training/useful-links">Useful Links</Link>
              </div>
            </div>

            {/* Logout */}
            <div className="dropdown">
              <button className="dropdown-btn" onClick={handleLogout}>
                LOGOUT
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default VolNav;
