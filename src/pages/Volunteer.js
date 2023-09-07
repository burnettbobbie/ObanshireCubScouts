import React, { Component } from "react";
import { motion } from "framer-motion";
import Register from "../components/Register";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";

class Volunteer extends Component {
  render() {
    // Define page animation variants for entrance, exit, and initial state
    const pageVariants = {
      initial: { opacity: 0, x: "-100%" },
      enter: { opacity: 1, x: "0%" },
      exit: { opacity: 0, x: "-100%" },
    };

    // Define page transition properties
    const pageTransition = {
      type: "tween",
      ease: "easeInOut",
      duration: 0.5,
    };

    return (
      <>
        {/* Navigation bar with the page title */}
        <Navbar pageTitle="VOLUNTEER" />

        <div className="volunteer-page">
          <main
            className="about-main"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
          >
            <aside className="info-sidebar1">
              {/* Information about obtaining disclosure */}
              <motion.p
                className="volunteer-steps"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                As a Cub Scout volunteer in Scotland, obtaining disclosure is an essential step to ensure the safety and well-being of the children you will be working with. Disclosure refers to the process of obtaining a criminal record check, which helps organizations assess the suitability of individuals working with vulnerable groups. Here's a guide on how to obtain disclosure as a Cub Scout volunteer in Scotland.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <b>
                  By following these steps, you will fulfill the necessary requirements to obtain disclosure as a Cub Scout volunteer in Scotland, demonstrating your commitment to the safety and well-being of the young Scouts under your care.
                </b>
              </motion.p>
            </aside>

            <motion.div
              className="info-main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <ul className="list">
                {/* Step 1: Contact the Scout Association */}
                <motion.li
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <strong>Contact the Scout Association:</strong> Reach out to your local Scout Association or Cub Scout group to express your interest in volunteering. They will guide you through the process and provide necessary information.
                </motion.li>

                {/* Step 2: Complete application forms */}
                <motion.li
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <strong>Complete application forms:</strong> Fill out the relevant application forms provided by the Scout Association. These forms will require personal details, including your name, address, and contact information.
                </motion.li>

                {/* Step 3: Apply for a disclosure check */}
                <motion.li
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <strong>Apply for a disclosure check:</strong> The Scout Association will provide you with the necessary paperwork to apply for a disclosure check. In Scotland, this process is facilitated by Disclosure Scotland, the government agency responsible for processing criminal record checks.
                </motion.li>

                {/* Step 4: Choose the appropriate level of disclosure */}
                <motion.li
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.4 }}
                >
                  <strong>Choose the appropriate level of disclosure:</strong> Depending on the nature of your volunteering role, you will need to choose the appropriate level of disclosure. The most common level is the Basic Disclosure, which checks for any unspent convictions you may have.
                </motion.li>

                {/* Step 5: Submit the application and payment */}
                <motion.li
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.6 }}
                >
                  <strong>Submit the application and payment:</strong> Complete the disclosure application form, ensuring that you provide accurate information. Enclose the required fee and send the application to Disclosure Scotland.
                </motion.li>

                {/* Step 6: Await the disclosure certificate */}
                <motion.li
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.8 }}
                >
                  <strong>Await the disclosure certificate:</strong> Once your application is received, Disclosure Scotland will process your request. The time taken can vary, but typically you can expect to receive your disclosure certificate within a few weeks.
                </motion.li>

                {/* Step 7: Share the disclosure certificate */}
                <motion.li
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 2 }}
                >
                  <strong>Share the disclosure certificate:</strong> Once you receive your disclosure certificate, provide a copy to the Scout Association. They will keep it securely on file, ensuring compliance with child protection policies.
                </motion.li>
              </ul>
            </motion.div>
          </main>
        </div>

        {/* Register component */}
        <Register />

        {/* Footer component */}
        <Footer />
      </>
    );
  }
}

export default Volunteer;
