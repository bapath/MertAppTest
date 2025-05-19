const mongoose = require('mongoose');

// Define the Task schema with required fields
const taskSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required']
    },
    description: {
      type: String,
      default: ''
    },
    completed: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true // Automatically add createdAt and updatedAt fields
  }
);

// Create and export the Task model
const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
