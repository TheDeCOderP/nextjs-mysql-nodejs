// Import Express
const express = require('express');

const db = require('./db.js');

// Initialize Express app
const app = express();

// Define a port
const PORT = 4000;

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello, Now you can start using backend');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
