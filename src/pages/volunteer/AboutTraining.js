import React from "react";
import VolNav from "../../components/volunteer/Navbar";
import Footer from "../../components/navigation/Footer";

const AboutTraining = () => {


  return (
    <>
      <VolNav pageTitle="TRAINING" />
      <div className="about-training">
        <div className="content-container">
          <h2>Volunteer Training</h2>
          <p>
            At Obanshire Cub Scouts, we value the importance of training our volunteers to ensure the best experience for our scouts. As a volunteer, you will have access to comprehensive training programs designed to equip you with the necessary knowledge and skills to fulfill your role effectively. Here's an overview of our training process:
          </p>
          <div className="training-steps">
            {/* Step 1 */}
            <div className="step">
              <h3>1- Orientation</h3>
              <p>
                Upon joining as a volunteer, you will participate in an orientation session where you'll learn about the mission, values, and structure of Obanshire Cub Scouts. You will also receive an introduction to the various programs and activities we offer.
              </p>
            </div>
            {/* Step 2 */}
            <div className="step">
              <h3>2- Role-Specific Training</h3>
              <p>
                Depending on your assigned role, you will undergo role-specific training. This training will cover the specific responsibilities, procedures, and skills required for your role. It may include workshops, online modules, hands-on demonstrations, and mentoring by experienced volunteers.
              </p>
            </div>
            {/* Step 3 */}
            <div className="step">
              <h3>3- Child Safety and Protection</h3>
              <p>
                Ensuring the safety and well-being of our scouts is of utmost importance. Therefore, all volunteers are required to complete training on child safety and protection. This training covers topics such as recognizing and reporting child abuse, maintaining appropriate boundaries, and following Obanshire Cub Scouts' child protection policies.
              </p>
            </div>
            {/* Step 4 */}
            <div className="step">
              <h3>4- Ongoing Support and Development</h3>
              <p>
                Our commitment to your growth as a volunteer extends beyond initial training. We provide ongoing support and development opportunities through workshops, seminars, and networking events. These opportunities allow you to enhance your skills, learn new techniques, and stay updated on the latest practices in scouting.
              </p>
            </div>
            {/* Step 5 */}
            <div className="step">
              <h3>5- Certification and Recognition</h3>
              <p>
                As you complete the required training and gain experience in your role, you will be eligible for certifications and recognition. These achievements acknowledge your dedication and contribution to Obanshire Cub Scouts and can enhance your professional profile.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutTraining;
