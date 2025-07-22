
import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [habits, setHabits] = useState([]);
  const userId = 1; // replace with dynamic ID from login

  useEffect(() => {
    const fetchHabits = async () => {
      const res = await fetch(`http://localhost:5050/api/habits/${userId}`);
      const data = await res.json();
      setHabits(data);
    };
    fetchHabits();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {Array.isArray(habits) ? (
          habits.map(habit => (
            <div key={habit.id}>{habit.name}</div>
          ))
        ) : (
          <p>No habits to show.</p>
        )}

      </ul>
    </div>
  );
}

export default Dashboard;
