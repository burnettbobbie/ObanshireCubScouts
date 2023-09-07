import React from "react";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";
import img from '../images/tug-of-war.jpg';
import img2 from '../images/O B A N S H I R E.png'

const About = () => {
  return (
    <>
      <Navbar pageTitle="ABOUT" />
      <div className="about-page-container">
        <main className="about-main">
          <div className="info-main">
            {/* Main title */}
            <h1>
              Welcome to
              <h1 className="mobile-obanshire"> Obanshire </h1>
              <img src={img2} alt="Obanshire" />
              Cub Scouts!
            </h1>
            
            {/* First section */}
            <section className="sectionEnd">
              <p>
                {/* Description of Obanshire Cub Scouts */}
                Obanshire is a vibrant and inclusive community that embraces the spirit of adventure and personal growth. With a focus on empowering young boys and girls, Obanshire Cub Scouts offers exciting outdoor experiences, teamwork opportunities, and valuable life skills. It fosters a safe and nurturing environment, where children from diverse backgrounds can build lasting friendships, develop important values, and create unforgettable memories. Obanshire is where the journey of self-discovery, leadership, and fun begins. As a part of the global Scouting movement, we are dedicated to providing exciting adventures and valuable life skills to children aged 7 to 10.
              </p>
              
              {/* Contact Information */}
              <h3 style={{ marginBottom: '1rem' }}>Contact Information:</h3>
              <p>
                Phone: <a href="tel:+11234567890">+1 (123) 456-7890</a><br />
                Email: <a href="mailto:info@obanshirecubscouts.org">info@obanshirecubscouts.org</a>
              </p>
              
              {/* Location */}
              <h3>Location</h3>
              <p>
                Obanshire Cub Scouts<br />
                123 Main Street<br />
                Obanshire, SC1 2345
              </p>
              
              {/* Google Maps iframe */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17657.942542500557!2d-5.486227971352736!3d56.41187700081266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488941d0d2ddf1c1%3A0x83dd4aff818fc237!2sOban!5e0!3m2!1sen!2suk!4v1685979219486!5m2!1sen!2suk" title="location" width="1800px" border="thick" height="150" allowfullscreen="" loading="fast" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
            
            {/* Second section */}
            <section className="section2">
              <h3>Outdoor Experiences and Personal Development</h3>
              <p>
                At Obanshire Cub Scouts, we believe in the power of outdoor experiences, teamwork, and personal development. Our carefully crafted programs offer a wide range of activities that foster self-confidence, leadership, and a sense of responsibility. From camping and hiking to crafts and games, there's always something new and exciting for our Cubs to discover.
              </p>
            </section>
            
            {/* Third section */}
            <section>
              <h3>A Safe and Inclusive Community</h3>
              <p className="safe-text">
                Our dedicated team of trained leaders is passionate about guiding Cubs on their journey of exploration and self-discovery. We provide a safe and nurturing environment where children can make lifelong friends, develop important values, and create lasting memories. Through our progressive and engaging program, we aim to inspire curiosity, promote physical fitness, and instill a sense of environmental stewardship.
              </p>
            </section>
            
            {/* Fourth section */}
            <section>
                {/* Empty section for spacing */}
            </section>
            
            {/* Fifth section */}
            <section className="sectionEnd">
              {/* Image */}
              <img src={img} alt="happy-cub-jumping" className="about-image" />
              
              {/* Join Obanshire Cub Scouts */}
              <h3>Join Obanshire Cub Scouts Today!</h3>
              <p>
                We are more than just a youth organization; we're a close-knit community that values inclusivity and diversity. We welcome children from all backgrounds and abilities, fostering an environment where everyone feels accepted and respected. Our Cubs learn the importance of teamwork, tolerance, and understanding, building friendships that transcend cultural boundaries.
              </p>
              <p>
                As a parent, you can feel confident knowing that Obanshire Cub Scouts prioritizes the safety and well-being of our members. We adhere to rigorous safety protocols and ensure all our adult volunteers undergo proper training and background checks. Your child's safety is our top priority as they embark on incredible adventures and form lifelong bonds.
              </p>
              <p>
                Join today and give your child the opportunity to embark on an unforgettable journey of self-discovery, leadership, and fun. Together, we'll create memories that will last a lifetime and equip our Cubs with the skills they need to thrive in an ever-changing world.
              </p>
              <p>
                Come and be a part of Obanshire Cub Scouts - where adventure begins!
              </p>
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default About;
