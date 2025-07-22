
const db = require('../db');
const bcrypt = require('bcrypt');

async function createUser(email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await db.query(
        'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *',
        [email, hashedPassword]
    );
    return result.rows[0];
}

async function findUserByEmail(email) {
    const result = await db.query(
        'SELECT * FROM users WHERE email = $1',
        [email]
    );
    return result.rows[0];
}

module.exports = { createUser, findUserByEmail };
