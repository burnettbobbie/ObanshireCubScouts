import React from "react";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";
import img from '../images/scoutsUK.png';

const Scouts = () => {
  return (
    <>
      <Navbar pageTitle="Scouts UK" />
      <div className="scouts-container">
        {/* About Scouts section */}
        <div className="about-history">
          <h1>About Scouts</h1>
          <div>
            Scouting is a worldwide youth organization that aims to develop young people's character, leadership skills, and sense of adventure. Founded over a century ago, the Scout movement has grown into a global community, engaging millions of young individuals in diverse countries. In the United Kingdom, the Scout Association is the largest coeducational youth organization, offering a range of exciting activities and programs for children and young adults.
          </div>
          

          <h3>History</h3>
          <div>
            The Scout movement was established by Sir Robert Baden-Powell in 1907, a British military officer, writer, and adventurer. Baden-Powell noticed the need to cultivate young people's physical and mental skills while fostering a sense of responsibility and self-reliance. The movement quickly gained popularity, and the first Scout camp was held at Brownsea Island, UK, in 1907. From there, Scouting spread across the globe, promoting outdoor education, community service, and personal development.
          </div>
        </div>
        
        {/* UK Scouts section */}
        <div className="uk-scouts">
          <div className="uk-scouts-info">
            {/* Title and logo */}
            <h2>
              Cub Scouts in the UK 
              <img src={img} alt="scouts-UK-logo" />
            </h2>
          </div>
          
          {/* Description of Cub Scouts in the UK */}
          <section>
            Cub Scouts form an integral part of the Scout Association in the United Kingdom. The Cub Scout section is designed for children between the ages of 8 and 10. It provides a safe and nurturing environment where young individuals can explore their interests, build friendships, and develop important life skills.
          </section>
          
          {/* Activities of Cub Scouts */}
          <section>
            Cub Scouts engage in a variety of activities that are both educational and enjoyable. These activities are structured around a program that encourages personal growth, teamwork, and a sense of adventure. Cub Scouts participate in games, outdoor exploration, crafts, and other engaging tasks that promote physical fitness, creativity, and problem-solving abilities.
          </section>
          
          {/* Learning through fun */}
          <section>
            One of the key aspects of Cub Scouts is the emphasis on learning through fun. The program encourages Cubs to develop their curiosity, explore the natural world, and gain a broader understanding of the community around them. Cubs learn important life skills, such as first aid, navigation, and communication, while also engaging in activities that promote teamwork, leadership, and resilience.
          </section>
          
          {/* Leadership and support */}
          <section>
            The Cub Scout section is led by trained adult volunteers, who guide and support the young members in their development. These dedicated leaders create a positive and inclusive atmosphere where Cubs can learn, grow, and have memorable experiences.
          </section>
          
          {/* Uniform */}
          <section>
            In the UK, Cub Scouts wear a distinctive uniform, which helps foster a sense of belonging and unity within the group. The uniform represents a shared identity and encourages pride in being part of the Scout movement.
          </section>
        </div>
        
        {/* Cub Scout activities section */}
        <div className="cub-scout-activities">
          <h1>Activities in Cub Scouts</h1>
          <ul className="activity-list">
            {/* List of activities */}
            <li className="activity-item">Outdoor exploration and nature hikes</li>
            <li className="activity-item">Camping and overnight adventures</li>
            <li className="activity-item">Sports and physical fitness activities</li>
            <li className="activity-item">Crafts and creative projects</li>
            <li className="activity-item">Team-building games and challenges</li>
            <li className="activity-item">First aid training and emergency preparedness</li>
            <li className="activity-item">Community service projects</li>
            <li className="activity-item">Learning about different cultures and traditions</li>
            <li className="activity-item">Visits to local landmarks and historical sites</li>
            <li className="activity-item">Badge work and skill development</li>
            <li className="activity-item">Learning basic navigation and map reading</li>
            <li className="activity-item">Cooking and outdoor cooking skills</li>
            <li className="activity-item">Team games and friendly competitions</li>
            <li className="activity-item">Exploring science and conducting experiments</li>
            <li className="activity-item">Engaging in drama, singing, and music</li>
            <li className="activity-item">Learning about wildlife and conservation</li>
            <li className="activity-item">Visiting local fire stations, police stations, or museums</li>
            <li className="activity-item">Participating in group ceremonies and traditions</li>
            <li className="activity-item">Attending community events and parades</li>
            <li className="activity-item">Developing problem-solving and critical thinking skills</li>
          </ul>
        </div>
   
        {/* Summary */}
        <div className="scout-summary">
          Joining Cub Scouts in the UK provides children with an opportunity to embark on an exciting journey of self-discovery, friendship, and personal growth. Through a wide range of activities and experiences, Cub Scouts develop important life skills, form lasting memories, and lay the foundation for becoming responsible and engaged members of their communities.
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Scouts;
