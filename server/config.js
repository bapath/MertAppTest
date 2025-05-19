// Configuration settings for the application
const config = {
  // MongoDB Atlas connection string - replace with your actual MongoDB URI in production
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/mern_tasks?retryWrites=true&w=majority',
  
  // Server port
  PORT: process.env.PORT || 5000,
  
  // Client URL for CORS configuration
  CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:3000'
};

module.exports = config;
