const { Pool } = require('pg');

const pool = new Pool({
    user: 'your_username',
    host: 'your_host',
    database: 'your_database',
    password: 'your_password',
    port: your_port,
    // Optional: SSL settings if required for Google Cloud SQL
    ssl: {
        rejectUnauthorized: false,
        ca: process.env.SERVER_CA,
        key: process.env.CLIENT_KEY,
        cert: process.env.CLIENT_CERT,
    }
});

module.exports = pool;
