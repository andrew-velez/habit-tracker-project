
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/habit/new">New Habit</Link>
      <Link to="/">Logout</Link>
    </nav>
  );
}

export default Navbar;
