
import React from 'react';

function Profile() {
  const userEmail = "test@example.com"; // Replace with real user info from context or API

  return (
    <div>
      <h2>User Profile</h2>
      <p>Email: {userEmail}</p>
      <p>More profile features coming soon...</p>
    </div>
  );
}

export default Profile;
