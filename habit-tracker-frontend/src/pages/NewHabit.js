
import React, { useState } from 'react';

function NewHabit() {
  const [name, setName] = useState('');
  const [frequency, setFrequency] = useState('');
  const userId = 1; // Replace with dynamic user ID later

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5050/api/habits', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, name, frequency })
    });
    window.location.href = '/dashboard';
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Habit</h2>
      <input type="text" placeholder="Habit name" onChange={e => setName(e.target.value)} required />
      <select onChange={e => setFrequency(e.target.value)} required>
        <option value="">Select frequency</option>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
      </select>
      <button type="submit">Add Habit</button>
    </form>
  );
}

export default NewHabit;
