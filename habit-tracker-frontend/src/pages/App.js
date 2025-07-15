import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="container">
      <h1>Habit Tracker</h1>
      <nav>
        <Link to="/">Login</Link> | <Link to="/register">Register</Link> | <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
