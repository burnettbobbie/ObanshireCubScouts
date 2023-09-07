import React , {useState}from "react";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";


const Badges = () => {
  //links to the badge images
  const badges = [
    { name: 'Fire Safety', image:'https://prod-cms.scouts.org.uk/media/1044/activity-cu-fire-safety.svg', description: 'The Fire Safety Badge is a symbol of knowledge and preparedness. This badge program offers participants the opportunity to gain a comprehensive understanding of fire safety principles. From the science behind fires to the importance of prevention and emergency response, participants will engage in informative lessons and hands-on activities. Skills learned include creating fire escape plans, identifying potential hazards, and practicing safe fire-handling techniques. The badge signifies a commitment to keeping oneself and others safe while fostering a sense of responsibility and preparedness in various environments. Earn the Fire Safety Badge and become a guardian of fire safety knowledge.'},
    { name: 'Animal Carer', image: 'https://prod-cms.scouts.org.uk/media/6187/pets-at-home_cu-animalfriends-2020-cmyk.png', description:'The Animal Carer Badge signifies a commitment to understanding and nurturing the animal kingdom. Participants learn about responsible pet ownership, animal behavior, and caregiving techniques, fostering a sense of compassion and empathy for creatures big and small.' },
    { name: 'Astronomer', image:'https://prod-cms.scouts.org.uk/media/1030/activity-cu-astronomer.svg', description:'The Astronomer Badge embodies a fascination with the cosmos and celestial bodies. Explorers delve into the mysteries of the night sky, gaining knowledge about stars, planets, and the universe, while igniting a passion for stargazing and space exploration.' },
    { name: 'Equestrian', image:'https://prod-cms.scouts.org.uk/media/1043/activity-cu-equestrian.svg', description:'The Equestrian Badge celebrates the world of horsemanship and equine care. Participants engage in activities that develop riding skills, stable management, and a deep connection with horses, embodying the spirit of equestrianism.' },
    { name: 'DIY', image:'https://prod-cms.scouts.org.uk/media/1040/activity-cu-diy.svg',description:'The DIY Badge represents a mastery of do-it-yourself skills. Participants tackle home improvement projects, learn to wield tools, and gain confidence in handling repairs, showcasing their ability to take on practical challenges.' },
    { name: 'Communicator', image:'https://prod-cms.scouts.org.uk/media/1037/activity-cu-communicator.svg',description:'The Communicator Badge highlights effective communication skills. Participants engage in activities that enhance speaking, writing, and listening abilities, reflecting their capacity to convey ideas, connect with others, and express themselves eloquently.' },
    { name: 'Collector', image:'https://prod-cms.scouts.org.uk/media/4315/activity-cu-collector.png', description:'The Collector Badge embodies the joy of collecting and curating. Participants explore various collections, learn about preservation techniques, and exhibit items of personal interest, showcasing a dedication to preserving cherished artifacts.' },
    { name: 'Athletics', image:'https://prod-cms.scouts.org.uk/media/1031/activity-cu-athletics.svg', description:'The Athletics Badge exemplifies physical prowess and sportsmanship. Participants immerse themselves in athletic activities, honing skills in running, jumping, and team sports, embodying the spirit of active engagement and healthy competition.' },
    { name: 'Athletics Plus', image: 'https://prod-cms.scouts.org.uk/media/1032/activity-cu-athleticsplus.svg', description:'The Athletics Plus Badge signifies an advanced level of athleticism and dedication. Participants push their physical limits through challenging sports and fitness activities, showcasing exceptional prowess and achievement.' },
    { name: 'Artist', image:'https://prod-cms.scouts.org.uk/media/1029/activity-cu-artist.svg' , description:'The Artist Badge celebrates creativity and self-expression through art. Participants experiment with various art forms, harnessing their imagination to produce visual masterpieces and showcasing their unique artistic perspectives.'},
    { name: 'Book Reader', image:'https://prod-cms.scouts.org.uk/media/1034/activity-cu-book-reader.svg' , description:'The Book Reader Badge represents a love for literature and the written word. Participants embark on reading adventures, exploring diverse genres and narratives, and fostering a lifelong appreciation for storytelling and learning.'},
    { name: 'Backwoods Cooking', image: 'https://prod-cms.scouts.org.uk/media/1033/activity-cu-backwooks-cooking.svg' , description:"The Backwoods Cooking Badge invites participants to master the art of cooking in the great outdoors. Learn essential campfire cooking techniques, from preparing delicious meals to crafting tasty treats. This badge represents your ability to turn nature's bounty into culinary delights."},
    { name: 'Cyclist', image:'https://prod-cms.scouts.org.uk/media/19912/cubs-cyclist-02-01-1.png' , description:'The Cyclist Badge celebrates the joy of biking and adventure on two wheels. Participants explore the world of cycling, from bike safety to maintenance, embodying a spirit of exploration and physical activity.'},
    { name: 'Digital Citizen Staged Badge', image:'https://prod-cms.scouts.org.uk/media/4229/digital-citizen-stage-1-nominet.png', description:'The Digital Citizen Staged Badge equips participants with essential skills for the digital age. Learn about online safety, responsible internet use, and digital communication, showcasing your ability to navigate the digital landscape wisely.' },
    { name: 'Entertainer', image:'https://prod-cms.scouts.org.uk/media/1041/activity-cu-entertainer.svg' , description:'The Entertainer Badge celebrates the art of performance and creativity. Participants engage in entertaining activities, from magic tricks to acting, showcasing their ability to captivate and bring joy to others.'},
    { name: 'Environmental Conservation', image:'https://prod-cms.scouts.org.uk/media/18095/ukpn-activity-badges-cu-environment-conservation-cmyk.png', description:'The Environmental Conservation Badge signifies a commitment to preserving and protecting our planet. Participants learn about environmental issues, engage in conservation efforts, and become advocates for a sustainable future, embodying a sense of stewardship for the Earth.' },
    { name: 'Global Issues', image:'https://prod-cms.scouts.org.uk/media/1046/activity-cu-global-issues.svg' , description:'The Global Issues Badge delves into pressing global challenges and the power of positive change. Participants explore issues affecting communities worldwide, foster cultural understanding, and develop solutions, embodying a commitment to global awareness and social responsibility.'},
    { name: 'Home Safety', image:'https://prod-cms.scouts.org.uk/media/16365/carbon-monoxide-safety-cubs-home-safety.png' , description:'The Home Safety Badge emphasizes the importance of a safe and secure living environment. Participants learn about fire safety, first aid, and emergency preparedness, showcasing their ability to create a safe haven for themselves and others.'},
    { name: 'Martial Arts', image:'https://prod-cms.scouts.org.uk/media/1052/activity-cu-martial-arts.svg' , description:'The Martial Arts Badge embodies discipline, physical fitness, and self-defense skills. Participants explore various martial arts techniques, from stances to basic moves, showcasing their dedication to personal growth and empowerment.'},
    { name: 'Money Skills', image: 'https://prod-cms.scouts.org.uk/media/13707/activity-badges-cu-money-skills-rgb.png', description:'The Money Skills Badge equips participants with essential financial literacy knowledge. Learn about budgeting, saving, and wise spending, showcasing your ability to make informed financial decisions.'},
    { name: 'Musician Staged Badge', image:'https://prod-cms.scouts.org.uk/media/1292/staged-musician.svg' , description:'The Musician Staged Badge celebrates the world of music and sound. Participants explore musical instruments, theory, and performance, showcasing their ability to create and appreciate melodic harmonies.'},
    { name: 'Local Knowledge', image:'https://prod-cms.scouts.org.uk/media/1051/activity-cu-local-knowledge.svg' , description:"The Local Knowledge Badge celebrates an understanding of your community's history, landmarks, and culture. Participants delve into local traditions, geography, and stories, showcasing a connection and appreciation for the places they call home."},
    { name: 'Personal Safety', image:'https://prod-cms.scouts.org.uk/media/10783/rail-industry-cu-personal-safety.png' , description:'The Personal Safety Badge empowers participants with essential life skills for staying safe in various situations. Learn about personal security, road safety, and emergency response, showcasing your ability to navigate the world confidently and responsibly.'},
    { name: 'Chef', image:'https://prod-cms.scouts.org.uk/media/1035/activity-cu-chef.svg' , description:'The Chef Badge celebrates culinary creativity and skill. Participants explore the art of cooking, from meal planning to food preparation, showcasing their ability to create delectable dishes that tantalize the taste buds.'},
    { name: 'Scientist', image: 'https://prod-cms.scouts.org.uk/media/1613/cu-scientist-rollsroyce-rgb.svg', description:'The Scientist Badge embodies a spirit of inquiry and discovery. Participants engage in scientific exploration, from conducting experiments to observing natural phenomena, showcasing their commitment to unraveling the mysteries of the world.' },
    { name: 'Sailing Staged Badge', image: 'https://prod-cms.scouts.org.uk/media/1297/staged-sailing.svg', description:'The Sailing Staged Badge embraces the maritime world and the art of sailing. Participants learn about sailing techniques, water safety, and navigation, showcasing their ability to harness the power of the wind and waves.'},
    { name: 'Skater', image: 'https://prod-cms.scouts.org.uk/media/1061/activity-cu-skater.svg', description:'The Skater Badge celebrates the world of skating and balance. Participants explore various skating techniques, from rollerblading to skateboarding, showcasing their ability to glide with grace and confidence.'},
    { name: 'Photographer', image: 'https://prod-cms.scouts.org.uk/media/1056/activity-cu-photographer.svg', description:'The Photographer Badge captures the essence of visual storytelling. Participants delve into photography techniques, from composition to lighting, showcasing their ability to freeze moments in time through the lens.'},
    { name: 'My Faith', image:'https://prod-cms.scouts.org.uk/media/1053/activity-cu-my-faith.svg', description:'The My Faith Badge encourages participants to explore and celebrate their personal faith journey. Engage in meaningful discussions, learn about religious traditions, and reflect on your beliefs, showcasing your commitment to spiritual growth.'},
    { name: 'Naturalist', image: 'https://prod-cms.scouts.org.uk/media/1054/activity-cu-naturalist.svg', description:'The Naturalist Badge celebrates a deep connection with nature and the environment. Participants explore ecosystems, wildlife, and conservation, showcasing their dedication to preserving and understanding the natural world.'},
    { name: 'Sports Enthusiast', image: 'https://prod-cms.scouts.org.uk/media/1062/activity-cu-sports-enthusiast.svg' , description:'The Sports Enthusiast Badge embodies a love for athletics and physical activity. Participants engage in a variety of sports and games, showcasing their commitment to an active and healthy lifestyle.'},
    { name: 'Snowsports Staged Badge', image:'https://prod-cms.scouts.org.uk/media/4467/staged-snowsports.png', description:'The Snowsports Staged Badge embraces the thrill of snow and winter sports. Participants learn about skiing or snowboarding techniques, safety, and mountain awareness, showcasing their ability to conquer snowy slopes.'},
    { name: 'Pioneer', image:'https://prod-cms.scouts.org.uk/media/1058/activity-cu-pioneer.svg', description:'The Pioneer Badge celebrates hands-on craftsmanship and outdoor skills. Participants engage in pioneering activities, from building structures to knot-tying, showcasing their ability to create and innovate.'},
    { name: 'Swimmer Staged Badge', image: 'https://prod-cms.scouts.org.uk/media/4468/staged-swimmer.png' , description:'The Swimmer Staged Badge marks a journey of aquatic skill development. Participants progress in swimming techniques, water safety, and survival skills, showcasing their confidence and mastery in the water.'},
    { name: 'Road Safety', image: 'https://prod-cms.scouts.org.uk/media/1059/activity-cu-road-safety.svg', description:'The Road Safety Badge emphasizes safe road behavior and responsible transportation practices. Participants learn about pedestrian safety, traffic rules, and cycling precautions, showcasing their ability to navigate roads with caution.'},
    { name: 'Air Activities Staged Badge', image:'https://prod-cms.scouts.org.uk/media/3703/staged-raf_activities_air-acitivities_stage.png', description:'The Air Activities Staged Badge soars into the skies of aviation exploration. Participants learn about aviation principles, aircraft, and flight safety, showcasing their fascination with the world of flying.' },
    { name: 'Community Impact Staged Badge', image:'https://prod-cms.scouts.org.uk/media/1287/staged-community.svg' , description:'The Community Impact Staged Badge embodies the spirit of service and community engagement. Participants initiate projects, volunteer, and make positive contributions to society, showcasing their dedication to creating a better world.'},
    { name: 'Emergency Aid Staged Badge', image:'https://prod-cms.scouts.org.uk/media/1290/staged-emergency-aid.svg' , description:'The Emergency Aid Staged Badge equips participants with vital first aid skills. Learn about injury assessment, medical response, and emergency procedures, showcasing your ability to provide essential aid in times of need.'},
    { name: 'Paddle Sports Staged Badge', image:'https://prod-cms.scouts.org.uk/media/1296/staged-paddle-sports.svg' , description:'The Paddle Sports Staged Badge navigates waterways with finesse. Participants learn about kayaking or canoeing techniques, water safety, and navigation, showcasing their ability to paddle through rivers and lakes.'},
    { name: 'The Great Indoors Staged Badge', image: 'https://prod-cms.scouts.org.uk/media/6733/1vector.png' , description:'The Great Indoors Staged Badge celebrates creative indoor adventures. Participants engage in indoor activities, games, and challenges, showcasing their ability to have fun and explore even within four walls.'},
    { name: 'World Faiths', image:'https://prod-cms.scouts.org.uk/media/1064/activity-cu-world-faiths.svg' , description:'The World Faiths Badge fosters cultural understanding and appreciation. Participants explore diverse faith traditions, values, and beliefs, showcasing their commitment to respecting and learning from different cultures.'},
    { name: 'Water Activities', image: 'https://prod-cms.scouts.org.uk/media/1063/activity-cu-water-activities.svg', description:'The Water Activities Badge dives into aquatic adventures. Participants engage in water-based sports and activities, showcasing their love for swimming, boating, and water exploration.'},
    { name: 'Time on the Water Staged Badge', image: 'https://prod-cms.scouts.org.uk/media/1643/time-on-water-stage-1-royal-navy-rgb.svg', description:'The Time on the Water Staged Badge marks a voyage of maritime skill development. Participants progress in sailing techniques, water safety, and navigation, showcasing their ability to navigate waterways with confidence.'},
    { name: 'Hikes Away Staged Badge', image:'https://prod-cms.scouts.org.uk/media/19907/hikes-away-02-01-1.png' , description:'The Hikes Away Staged Badge celebrates outdoor exploration and hiking adventures. Participants engage in hikes of varying lengths and terrains, showcasing their love for nature and hiking trails.'},
    { name: 'Nights Away Staged Badge', image:'https://prod-cms.scouts.org.uk/media/19908/nights-away-02-01-1.png' , description:'The Nights Away Staged Badge marks a journey of camping and outdoor skills. Participants experience nights away from home, learn camping techniques, and embrace the joys of outdoor living.'},
    { name: 'International', image:'https://prod-cms.scouts.org.uk/media/1050/activity-cu-international.svg' , description:'The International Badge embodies a global perspective and cultural exchange. Participants learn about different countries, traditions, and world issues, showcasing their interest in global interconnectedness.'},
    { name: 'Navigator Staged Badge', image:'https://prod-cms.scouts.org.uk/media/1294/staged-navigator.svg' , description:'The Navigator Staged Badge charts the course for navigation mastery. Participants learn about maps, compasses, and orienteering techniques, showcasing their ability to navigate with precision.'},
    { name: 'Nautical Skills Staged Badge', image:'https://prod-cms.scouts.org.uk/media/1293/staged-nautical.svg' , description:'The Nautical Skills Staged Badge embraces maritime knowledge and seamanship. Participants learn about sailing, knots, and boat safety, showcasing their connection with the world of water.'},
    { name: 'Digital Maker Staged Badge', image:'https://prod-cms.scouts.org.uk/media/6450/raspberry_pi_1-01.png' , description:'The Digital Maker Staged Badge celebrates technological creativity and innovation. Participants engage in digital projects, coding, and maker activities, showcasing their ability to craft and create in the digital realm.'},
    { name: 'Physical Recreation', image:'https://prod-cms.scouts.org.uk/media/1057/activity-cu-physical-recreation.svg' , description:'The Physical Recreation Badge embodies a commitment to physical fitness and wellness. Participants engage in sports and exercise, showcasing their dedication to an active and healthy lifestyle.'},
    { name: 'Disability Awareness', image:'https://prod-cms.scouts.org.uk/media/1039/activity-cu-disability-awareness.svg' , description:'The Disability Awareness Badge promotes understanding and empathy for diverse abilities. Participants learn about disabilities, challenges, and inclusivity, showcasing their commitment to fostering a more inclusive society.'},
    { name: 'Home Help', image:'https://prod-cms.scouts.org.uk/media/1048/activity-cu-home-help.svg' , description:'The Home Help Badge emphasizes practical life skills and contributions to the household. Participants learn about chores, organization, and home maintenance, showcasing their ability to create a harmonious living environment.'},
    { name: 'Hobbies', image:'https://prod-cms.scouts.org.uk/media/1047/activity-cu-hobbies.svg' , description:'The Hobbies Badge celebrates personal interests and hobbies. Participants engage in activities they are passionate about, showcasing their unique talents and creative pursuits.'},
    { name: "Gardener", image:'https://prod-cms.scouts.org.uk/media/1045/activity-cu-gardener.svg', description:'The Gardener Badge nurtures a love for plants and gardening. Participants learn about cultivation, gardening techniques, and plant care, showcasing their ability to bring nature to life in their own backyard.  ' }
  ];
  const [searchQuery, setSearchQuery] = useState("");

  const handlePrintBadge = (badge) => {
    const printWindow = window.open("", "_blank");
    //document to be printed
    printWindow.document.write(`
      <html>
        <head>
          <title>${badge.name}</title>
          <style>
            @media print {
              .badge-container {
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .badge-image {
                width: 500px;
                height: 500px;
              }
            }
          </style>
        </head>
        <body>
          <div class="badge-container">
            <img class="badge-image" src="${badge.image}" alt="${badge.name}">
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };
  
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter badges based on search query by name
  const filteredBadges = badges.filter((badge) =>
    badge.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="badge-page-container">
        <Navbar pageTitle="BADGES"/>
        <main>
          <div>
            <h1>Cub Scout Badges</h1>
            <p>
              In the UK, Cub Scouts have the opportunity to earn a variety of badges that recognize their achievements and skills. These badges cover different areas such as challenges, activities, and partnerships.
            </p>
            <input
              type="text"
              placeholder="Search badges..."
              value={searchQuery}
              onChange={handleSearch}
              className="search-bar"
            />
            <ul className="badges-container">
              {filteredBadges.map((badge, index) => (
                <li key={index} className="badge-card">
                  <h6>{badge.name}</h6>
                  <div className="tooltip">INFO
                    <p className="tooltip-text">{badge.description}</p>
                  </div>
                  <img src={badge.image} alt={badge.name} width="100" height="100" />
                  <button onClick={() => handlePrintBadge(badge)}>PRINT</button>
                </li>
              ))}
            </ul>
            
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Badges;