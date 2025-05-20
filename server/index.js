const express = require('express');
const router = express.Router();
const cors = require('cors');
const config = require('./config');
const taskRoutes = require('./routes/taskRoutes');

// Middleware
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(cors({
  origin: '*', // Change from config.CLIENT_URL to '*' to allow all origins temporarily
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Routes
router.use('/tasks', taskRoutes);

// Default route
router.get('/', (req, res) => {
  res.send('MERN Task API is running...');
});

// Error handling middleware
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something went wrong!', error: err.message });
});

module.exports = router;