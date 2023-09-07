import React, { useState, useEffect } from 'react';
import Navbar from '../../components/volunteer/Navbar';
import Footer from '../../components/navigation/Footer';
import axios from 'axios';
import AuthService from '../../services/auth.service';

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  const id = currentUser.id;

  // State variables
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    city: '',
    postcode: '',
    disclosure: 'None',
    phone: '',
    training: 'None'
  });

  useEffect(() => {
    // Fetch user data when the component mounts or when the "id" value changes
    const fetchUser = async () => {
      console.log('Fetching user data...');
      try {
        // Make a GET request to fetch the user data from the API
        const response = await axios.get(`http://localhost:5000/api/crudRoutes/users/${id}`);
        console.log('User data:', response.data);
        // Update the state with the fetched user data
        setUser(response.data[0]);
        setFormData(response.data[0]);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, [id]);

  const handleInputChange = (e) => {
    // Update the form data based on user input
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEditProfile = () => {
    // Enable editing mode
    setEditing(true);
  };

  const handleCancelEdit = () => {
    // Disable editing mode and reset the form data to the original user data
    setEditing(false);
    setFormData(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data before update:', formData);

    try {
      // Make a PUT request to update the user data
      await axios.put(`http://localhost:5000/api/crudRoutes/users/${id}`, formData);
      setEditing(false);

      // Retrieve the updated user data from the API
      const response = await axios.get(`http://localhost:5000/api/crudRoutes/users/${id}`);
      setUser(response.data[0]);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  return (
    <>
    <Navbar pageTitle="PROFILE INFORMATION" />
      <div className="profile-container">
        <div className="user-card">
          <div className="user-card-header">
            <h2>{user?.username}</h2>
          </div>
          <div className="user-card-body">
            {!editing ? (
              <table className="user-table">
                <tbody>
                  <tr>
                    <th>First Name</th>
                    <td>{user?.firstname}</td>
                  </tr>
                  <tr>
                    <th>Last Name</th>
                    <td>{user?.lastname}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{user?.email}</td>
                  </tr>
                  <tr>
                    <th>Address</th>
                    <td>{user?.address}</td>
                  </tr>
                  <tr>
                    <th>City</th>
                    <td>{user?.city}</td>
                  </tr>
                  <tr>
                    <th>Postcode</th>
                    <td>{user?.postcode}</td>
                  </tr>
                  <tr>
                    <th>Disclosure</th>
                    <td>{user?.disclosure}</td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td>{user?.phone}</td>
                  </tr>
                  <tr>
                    <th>Training</th>
                    <td>{user?.training}</td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <form className="edit-profile-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <label>
                    <span>First Name:</span>
                    <input
                      type="text"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    <span>Last Name:</span>
                    <input
                      type="text"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <div className="form-row">
                  <label>
                    <span>Email:</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    <span>Address:</span>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <div className="form-row">
                  <label>
                    <span>City:</span>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    <span>Postcode:</span>
                    <input
                      type="text"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <div className="form-row">
                  <label>
                    <span>Disclosure:</span>
                    <select
                      name="disclosure"
                      value={formData.disclosure}
                      onChange={handleInputChange}
                    >
                      <option value="Approved">Approved</option>
                      <option value="Pending">Pending</option>
                      <option value="None">None</option>
                    </select>
                  </label>
                  <label>
                    <span>Phone:</span>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <div className="form-row">
                  <label>
                    <span>Training:</span>
                    <select
                      name="training"
                      value={formData.training}
                      onChange={handleInputChange}
                    >
                      <option value="None">None</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </label>
                </div>
                <div className="button-container">
                  <button type="submit" className="submit-button">
                    Save Changes
                  </button>
                  <button type="button" className="cancel-button" onClick={handleCancelEdit}>
                    Cancel
                  </button>
                </div>
              </form>
            )}
        </div>
        {!editing && (
          <button className="edit-profile-button" onClick={handleEditProfile}>
            Edit Profile
          </button>
        )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
