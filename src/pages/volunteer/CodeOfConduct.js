import React from "react";
import VolNav from "../../components/volunteer/Navbar";
import Footer from "../../components/navigation/Footer";
import { motion } from "framer-motion";

const CodeOfConduct = () => {
  return (
    <>
      {/* Render the volunteer navigation bar */}
      <VolNav pageTitle="CODE of CONDUCT" />
      <div className="code-of-conduct">
        <h2>OCS Code of Conduct '23</h2>
        <h4>
          As a volunteer of Obanshire Cub Scouts, you play a vital role in shaping the experiences and development of our scouts. We expect all volunteers to adhere to the following code of conduct to maintain a safe and positive environment for everyone involved.
        </h4>
        <motion.table
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <tbody>
            {/* Code of Conduct guidelines */}
            <tr>
              <th>Role Model</th>
              <td>
                Be a positive role model for our scouts by demonstrating respect, integrity, and good sportsmanship. Uphold the values and principles of Obanshire Cub Scouts at all times.
              </td>
            </tr>
            <tr>
              <th>Safety</th>
              <td>
                Prioritize the safety and well-being of all scouts. Follow all safety guidelines and protocols provided by Obanshire Cub Scouts. Report any concerns or incidents promptly to the appropriate authorities.
              </td>
            </tr>
            <tr>
              <th>Inclusion and Respect</th>
              <td>
                Treat all scouts, volunteers, and staff members with respect and dignity. Embrace diversity and foster an inclusive environment where everyone feels welcome and valued, regardless of their background, abilities, or beliefs.
              </td>
            </tr>
            <tr>
              <th>Confidentiality</th>
              <td>
                Respect the privacy and confidentiality of scouts and their families. Do not disclose any personal or sensitive information without proper authorization.
              </td>
            </tr>
            <tr>
              <th>Communication</th>
              <td>
                Maintain open and transparent communication with fellow volunteers, scouts, and their families. Listen actively and address any concerns or conflicts in a respectful and constructive manner.
              </td>
            </tr>
            <tr>
              <th>Professionalism</th>
              <td>
                Conduct yourself professionally and responsibly. Be punctual, prepared, and reliable in fulfilling your volunteer duties. Follow the policies and guidelines set forth by Obanshire Cub Scouts.
              </td>
            </tr>
            <tr>
              <th>Compliance</th>
              <td>
                Abide by all applicable laws, regulations, and policies. Do not engage in any illegal or unethical activities while representing Obanshire Cub Scouts.
              </td>
            </tr>
            <h5>
              By volunteering with Obanshire Cub Scouts, you agree to adhere to this Code of Conduct and contribute to creating a safe and enriching experience for our scouts.
            </h5>
          </tbody>
        </motion.table>
      </div>
      <Footer />
    </>
  );
};

export default CodeOfConduct;
