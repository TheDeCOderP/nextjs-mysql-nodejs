// db.js

const mysql = require('mysql2');

// Create a connection pool for better performance
const db = mysql.createPool({
  host: 'localhost',      // Replace with your DB host
  user: 'root',           // Replace with your DB user
  password: '',   // Replace with your DB password
  database: 'mydatabase', // Replace with your DB name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test the connection
db.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
  } else {
    console.log('Connected to the MySQL database.');
    connection.release(); // Release the connection back to the pool
  }
});

// Export the pool for use in other files
module.exports = db ; // Use promise-based API