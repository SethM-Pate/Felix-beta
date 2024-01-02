const express = require('express');
const bcrypt = require('bcrypt');
const pool = require('./db');

const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body;
        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = await pool.query(
            'INSERT INTO users (email, password_hash) VALUES ($1, $2) RETURNING *',
            [email, passwordHash]
        );
        res.json(newUser.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/login', async (req, res) => {
    // ... login logic here
});

module.exports = router;
