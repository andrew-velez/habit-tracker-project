
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { createUser, findUserByEmail } = require('../models/User');

router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await findUserByEmail(email);
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        const user = await createUser(email, password);
        res.status(201).json({ message: 'User created', user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await findUserByEmail(email);
        if (!user) return res.status(404).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, userId: user.id });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
