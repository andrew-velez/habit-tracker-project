
const db = require('../db');

async function createHabit(userId, name, frequency) {
    const result = await db.query(
        'INSERT INTO habits (user_id, name, frequency) VALUES ($1, $2, $3) RETURNING *',
        [userId, name, frequency]
    );
    return result.rows[0];
}

async function getHabitsByUser(userId) {
    const result = await db.query(
        'SELECT * FROM habits WHERE user_id = $1',
        [userId]
    );
    return result.rows;
}

module.exports = { createHabit, getHabitsByUser };
