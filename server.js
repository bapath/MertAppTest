const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./server/config'); //  adjusted path
const api = require('./server/index'); // adjusted path
const axios = require('axios'); // <-- Add this line

const app = express();

// Function to log collections and their data
async function logCollectionsAndData(connection) {
    try {
        const collections = await connection.db.listCollections().toArray();
        console.log('Collections in the database:');
        for (const collection of collections) {
            console.log(collection.name);
            try {
                const data = await connection.db.collection(collection.name).find({}).toArray();
                console.log(data);
            } catch (err) {
                console.error(`Error fetching data from ${collection.name}:`, err);
            }
        }
    } catch (err) {
        console.error("Error listing collections:", err);
    }
}

// Connect to MongoDB
mongoose.connect(config.MONGODB_URI, {
    serverSelectionTimeoutMS: 30000,
    socketTimeoutMS: 45000,
    family: 4
})
    .then(async () => {
        // console.log('Connected to MongoDB');
        const dbName = mongoose.connection.db.databaseName;
        // console.log(`Connected to database: ${dbName}`);

        // Call the function to log collections and data
        // await logCollectionsAndData(mongoose.connection);


        // Serve API routes under /api
        app.use('/api', api);

        // Serve static files from the React build
        app.use(express.static(path.join(__dirname, 'client/build')));

        // Handle React routing, return all requests to React app
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
        });
        console.log(process.env.PORT)
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, async () => {
            console.log(`Server running on port ${PORT}`);

            // Test an endpoint after server starts
            // try {
            //     const response = await axios.get(`http://localhost:${PORT}/api/tasks`);
            //     console.log('Test API response:', response.data);
            // } catch (err) {
            //     console.error('Error testing API endpoint:', err.message);
            // }
        });
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});
