import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    joined: '2024-01-10'
  };

  return (
    <div style={{ padding: 20, backgroundColor: '#f5f6fa', minHeight: '100vh' }}>
      <h2 style={{ color: '#2c3e50' }}>👤 User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Joined:</strong> {user.joined}</p>
      <Link to="/"><button style={{ marginTop: 20, padding: '8px 15px', backgroundColor: '#34495e', color: 'white', border: 'none', borderRadius: 5 }}>⬅ Back to Recipes</button></Link>
    </div>
  );
}

export default Profile;