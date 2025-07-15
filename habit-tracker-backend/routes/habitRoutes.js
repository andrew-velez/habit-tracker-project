
const express = require('express');
const router = express.Router();
const { createHabit, getHabitsByUser } = require('../models/Habit');

router.post('/', async (req, res) => {
    const { userId, name, frequency } = req.body;
    try {
        const habit = await createHabit(userId, name, frequency);
        res.status(201).json(habit);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const habits = await getHabitsByUser(userId);
        res.json(habits);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
