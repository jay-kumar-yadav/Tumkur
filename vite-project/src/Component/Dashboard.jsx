import React, { useState } from 'react';

function Dashboard({ onLogout }) {
  const [users, setUsers] = useState([
    { id: 1, username: 'jay kumar', email: 'jay@example.com' },
    { id: 2, username: 'suraj kumar', email: 'suraj@example.com' },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [editedUsername, setEditedUsername] = useState('');
  const [editedEmail, setEditedEmail] = useState('');

  
  const handleEditUser = (user) => {
    setSelectedUser(user);
    setEditedUsername(user.username);
    setEditedEmail(user.email);
  };

  
  const handleUpdateUser = (e) => {
    e.preventDefault();
    const updatedUsers = users.map((user) =>
      user.id === selectedUser.id
        ? { ...user, username: editedUsername, email: editedEmail }
        : user
    );
    setUsers(updatedUsers);
    setSelectedUser(null); 
  };

  return (
    <div className="dashboard-container">
      <h2>User Dashboard</h2>
      <button onClick={onLogout} className="logout-button">Logout</button>

      <div className="user-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <button onClick={() => handleEditUser(user)} className="edit-button">
              Edit
            </button>
          </div>
        ))}
      </div>

      {selectedUser && (
        <div className="edit-form-container">
          <h3>Edit User</h3>
          <form onSubmit={handleUpdateUser}>
            <label>
              Username:
              <input
                type="text"
                value={editedUsername}
                onChange={(e) => setEditedUsername(e.target.value)}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={editedEmail}
                onChange={(e) => setEditedEmail(e.target.value)}
                required
              />
            </label>
            <button type="submit" className="update-button">Update</button>
            <button
              type="button"
              onClick={() => setSelectedUser(null)} // Close the edit form
              className="cancel-button"
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
