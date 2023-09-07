import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import img from '../../images/Frame 17.png';
import img2 from '../../images/Frame 19.png';
import img4 from '../../images/Frame 20.png';
import img5 from '../../images/purplecrop.png';
import Burger from '../../components/navigation/Burger';

const AdNav =({pageTitle})=>{
      // State variables
  const [burgerOpen, setBurgerOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmed = window.confirm('Are you sure you want to logout?');
    if(confirmed) {
    // Clear user session by removing the access token from local storage
    localStorage.removeItem('accessToken');

    // Redirect the user to the login page
    navigate('/');
    }
  };


  // Toggle burger icon state
  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };


    return(
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
          <Link to="/admin">DASBOARD</Link>
          <Link to="/admin/events/manage-events">MANAGE EVENTS</Link>
          <Link to="/admin/volunteers">VOLUNTEERS</Link>
        </div>
      </div>

      <style jsx>{`
      .mobile-nav-links {
        display: ${burgerOpen ? "flex" : "none"};
      }
      .navbar-signpost {
        position: relative;
        transition: transform 0.3s;
        cursor: pointer;
        z-index: 2;
      }
        
      }
    `}</style>


      {/* Desktop navigation */}
      <div className="nav-wrap">
        <div className="nav-top">
          <img src={img}
            alt="logo"
            className='swing'
          />
            <img src={img2} alt="title" className="title-heading" />
        </div>

        <div className="nav-bar">
          <div id="login-wrap">
            <Link to='/admin' className='dashboard-link'>
             <h1>ADMIN DASHBOARD</h1>
            </Link>
          </div>
          <h6 className="back-page-title">{pageTitle}</h6> 

          <div className="spacer"></div>

          {/* Navigation buttons */}
          <nav className="nav-buttons">
            {/* Oban Branch dropdown */}
            <div className="dropdown">
            <Link to="/admin/volunteers"><button className="dropdown-btn">
                VOLUNTEERS 
              </button></Link>
            </div>

            {/* Scout Information dropdown */}
            <div className="dropdown">
              <button className="dropdown-btn">
                EVENTS <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <Link to="/admin/events/manage-events">Manage Events</Link>
                <Link to="/admin/events/calendar">Calendar</Link>
              </div>
            </div>

            {/* Cub Corner link */}
            <div className="dropdown">
            <button className="dropdown-btn" onClick={handleLogout}>
              LOGOUT
            </button>
            </div>
          </nav>
     
        </div>
     


      </div>
      </>
    )
}

export default AdNav;
      