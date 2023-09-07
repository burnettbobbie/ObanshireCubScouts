import React from 'react';

const UserItem = ({ user }) => {
  return (
    <div className="user-card">
      <div className="user-card-header">
        {/* Render the user's username */}
        <h2>{user.username}</h2>
      </div>
      <div className="user-card-body">
        <table className="user-table">
          <tbody>
            {/* Display the user's first name */}
            <tr>
              <th>First Name</th>
              <td>{user.firstname}</td>
            </tr>
            {/* Display the user's last name */}
            <tr>
              <th>Last Name</th>
              <td>{user.lastname}</td>
            </tr>
            {/* Display the user's email */}
            <tr>
              <th>Email</th>
              <td>{user.email}</td>
            </tr>
            {/* Display the user's address */}
            <tr>
              <th>Address</th>
              <td>{user.address}</td>
            </tr>
            {/* Display the user's city */}
            <tr>
              <th>City</th>
              <td>{user.city}</td>
            </tr>
            {/* Display the user's postcode */}
            <tr>
              <th>Postcode</th>
              <td>{user.postcode}</td>
            </tr>
            {/* Display the user's disclosure */}
            <tr>
              <th>Disclosure</th>
              <td>{user.disclosure}</td>
            </tr>
            {/* Display the user's phone number */}
            <tr>
              <th>Phone</th>
              <td>{user.phone}</td>
            </tr>
            {/* Display the user's training information */}
            <tr>
              <th>Training</th>
              <td>{user.training}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserItem;
