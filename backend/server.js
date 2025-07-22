
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const habitRoutes = require('./routes/habitRoutes');

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/habits', habitRoutes);

app.get('/', (req, res) => {
    res.send('Habit Tracker API Running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
