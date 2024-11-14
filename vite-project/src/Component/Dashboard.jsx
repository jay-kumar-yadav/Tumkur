import React from 'react';

function Dashboard({ onLogout }) {
  const users = [
    { id: 1, username: 'Jay kumar' },
    { id: 2, username: 'suraj kumar' },
    { id: 1, username: 'Tejaswi kumar' },
  ];

  return (
    <div className="dashboard-container">
      <h2>User Dashboard</h2>
      <button onClick={onLogout} className="logout-button">Logout</button>
      <div className="user-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <p>{user.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
