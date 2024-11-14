import React, { useState } from 'react';
import LoginRegister from './Component/LoginRegister';
import Dashboard from './Component/Dashboard';
import './style.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        <LoginRegister onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
