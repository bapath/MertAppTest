const express = require('express');
const path = require('path');
const cors = require('cors'); // Import cors
const app = express();

// Import your backend app
const api = require('./server/index');

// Use cors middleware
app.use(cors()); // Correctly using cors as a middleware function

// Serve API routes under /api
app.use('/api', api);

// Serve static files from the React build
app.use(express.static(path.join(__dirname, 'client/build')));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});