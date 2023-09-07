import React, { useState } from "react";
import img from '../images/whitearrow.png';
import img2 from '../images/rope.png';
import img3 from '../images/scoutCabin.jpg';
import img4 from '../images/bjorn-snelders-Cd3Ek7rNXSk-unsplash.jpg';
import img5 from '../images/cooperation.png';
import img6 from '../images/responsibility.png';
import img7 from '../images/respect.png';
import img8 from '../images/Frame 21.png';
import Slideshow from "../components/Slideshow";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const images = [img3, img4];
  const navigate = useNavigate();
  const [linkClicked, setLinkClicked] = useState(false);

  function wait(time) {
    return new Promise(resolve => {
      setTimeout(resolve, time);
    });
  }

  const handleLinkClick = async () => {
    setLinkClicked(true);
    await wait(500);
    navigate("/about");
  };

  return (
    <>
      <div className="page-container">
        <main className="home-main">
          {/* Link to the "about" page */}
          <Link
            to="/about"
            className={`content-link ${linkClicked ? "link-clicked" : ""}`}
            onClick={() => {
              setLinkClicked(true);
              handleLinkClick();
            }}
          >
            <h4>E N T E R &nbsp; S I T E</h4>
            <button className="link-button">
              <img src={img} alt="arrow" className="w-arrow" />
            </button>
          </Link>
          <Link to="/about" className="mobile-link">
            E N T E R  &nbsp;&nbsp; S I T E
          </Link>
          <div className="home-content">
            <div className="landing-bottom">
              {/* OCS logo */}
              <img src={img8} alt="OCS-logo" id="OCS-logo" />

              <div className="slideshow-container">
                {/* Slideshow component */}
                <Slideshow images={images} />
              </div>

              <div className="cub-scouts-values">
                {/* Cub Scouts values */}
                <div className="cub-scouts-value">
                  <img src={img7} alt="Value 2" className="value-icon" />
                  <h3 className="value-title">Respect</h3>
                  <p className="value-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="cub-scouts-value">
                  <img src={img5} alt="Value 1" className="value-icon" />
                  <h3 className="value-title">Cooperation</h3>
                  <p className="value-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="cub-scouts-value">
                  <img src={img6} alt="Value 3" className="value-icon" />
                  <h3 className="value-title">Responsibility</h3>
                  <p className="value-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>

              {/* Rope image */}
              <img src={img2} alt="rope" className="rope" />

              <div className="copyright">
                <span>
                  © 2023 Copyright. Charity numbers: 306101 (England and
                  Wales) and SC038437 (Scotland). Registered address: The Scout
                  Association, Gilwell Park, Chingford, London, England E4 7QW
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
