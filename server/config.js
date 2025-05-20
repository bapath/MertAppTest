// Configuration settings for the application
const config = {
  // MongoDB Atlas connection string - replace with your actual MongoDB URI in production
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://pulse_user:pz9XBnQNAOaTbGxq@development.hjcz3.mongodb.net/?retryWrites=true&w=majority&appName=Development',
  
  // Server port
  PORT: process.env.PORT || 5000,
  
  // Client URL for CORS configuration
  CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:3000'
};

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  MONGODB_URI: isProduction ? process.env.MONGODB_URI : 'mongodb://127.0.0.1:27017/mern_tasks_dev',
  PORT: process.env.PORT || 5000,
};
