import AdNav from "../../components/admin/NavBar";
import Footer from "../../components/navigation/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import UserItem from "../../components/admin/UserItem";

const Volunteers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    // Fetch volunteers data from the API
    const fetchVolunteers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/crudRoutes/users');
        setUsers(response.data);
      } catch (error) {
        console.log('Error fetching volunteers', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVolunteers();
  }, []);

  const handleSearchInputChange = (e) => {
    // Update the search input value
    setSearchInput(e.target.value);
  }

  useEffect(() => {
    // Filter users based on search input
    const filteredUsers = users.filter((user) => {
      const fullName = `${user.firstname} ${user.lastname}`.toLowerCase();
      return fullName.includes(searchInput.toLowerCase());
    });
    setFilteredUsers(filteredUsers);
  }, [users, searchInput]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      {/* Render the admin navigation bar */}
      <AdNav pageTitle='Volunteer Information' />
      <div className="volunteers-container">
        {/* Search input */}
        <input
          type="text"
          placeholder="Search volunteers..."
          value={searchInput}
          onChange={handleSearchInputChange}
          className="search-bar"
        />
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="user-list" layout>
            {/* Display the list of filtered users */}
            {filteredUsers.length === 0 ? (
              <div>No volunteers found.</div>
            ) : (
              filteredUsers.map((user) => (
                // Animate the user item using framer-motion
                <motion.div
                  key={user._id}
                  className="user-item"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <UserItem user={user} />
                </motion.div>
              ))
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Volunteers;
