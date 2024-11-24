/**
 * Simple HTTP Server
 * Description: Basic Express.js server to serve the Grobots website static files
 * Author: Robotics Club SRMCEM
 * Version: 1.0
 * Dependencies: express
 */

// Import required modules
const express = require('express');
const path = require('path');

// Initialize Express application
const app = express();

// Set port number from environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Route handler for the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});