import React, { useRef, useEffect } from "react";
import Navbar from '../../components/volunteer/Navbar';
import Footer from "../../components/navigation/Footer";
import img from '../../images/signpost.webp';

const UsefulLinks = () => {
  // Create a ref to the links container
  const linksRef = useRef(null);

  useEffect(() => {
    // Add a class to the slideshow container after a short delay to trigger the animation
    setTimeout(() => {
      if (linksRef.current) {
        linksRef.current.classList.add("slide-in");
      }
    }, 500);
  }, []);

  return (
    <>
      <Navbar pageTitle='USEFUL LINKS' />
      <div className="useful-links-page">
        <h2 className="useful-links-title">Useful Links for Cub Scouts Volunteers (UK)</h2>
        <div ref={linksRef} className="useful-links-container">
          <img src={img} alt="signpost" />

          {/* List of useful links */}
          <ul className="useful-links-list">
            <li>
              {/* Link 1 */}
              <i> X </i>
              <a href="https://www.scouts.org.uk/"> &nbsp;The Scout Association</a>
            </li>
            <li>
              {/* Link 2 */}
              <i> X </i>
              <a href="https://www.scouts.org.uk/cubs/"> &nbsp; Cub Scouts - The Scout Association</a>
            </li>
            <li>
              {/* Link 3 */}
              <i> X </i>
              <a href="https://www.scouts.org.uk/cubs/activity-badges/"> &nbsp;Cub Scout Badges</a>
            </li>
            <li>
              {/* Link 4 */}
              <i> X </i>
              <a href="https://www.scouts.org.uk/volunteers/learning-and-development/"> &nbsp;Training for Volunteers</a>
            </li>
            <li>
              {/* Link 5 */}
              <i> X </i>
              <a href="https://www.scouts.org.uk/cubs/activity-badges/"> &nbsp;Cub Scouts Activity Badges</a>
            </li>
            <li>
              {/* Link 6 */}
              <i> X </i>
              <a href="https://www.scouts.org.uk/cubs/awards/">&nbsp; Cub Scouts Awards</a>
            </li>
            <li>
              {/* Link 7 */}
              <i> X </i>
              <a href="https://www.scouts.org.uk/volunteers/staying-safe/safeguarding/"> &nbsp;Safeguarding - The Scout Association</a>
            </li>
            <li>
              {/* Link 8 */}
              <i> X </i>
              <a href="https://www.scouts.org.uk/community/"> &nbsp;Scouting Community</a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UsefulLinks;
