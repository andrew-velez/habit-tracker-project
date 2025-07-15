const express = require('express');
const router = express.Router();
const { createHabit, getHabitsByUser } = require('../models/Habit');

router.post('/', async (req, res) => {
  const { userId, title, frequency } = req.body;
  try {
    const habit = await createHabit(userId, title, frequency);
    res.json(habit);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:userId', async (req, res) => {
  try {
    const habits = await getHabitsByUser(req.params.userId);
    res.json(habits);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
