const Task = require('../models/taskModel');

// Controller for task-related operations
const taskController = {
  // Get all tasks
  getAllTasks: async (req, res) => {
    try {
      const tasks = await Task.find({}).sort({ createdAt: -1 });
      res.status(200).json(tasks);
    } catch (error) {
      console.error('Error in getAllTasks:', error); // Add this line
      res.status(500).json({ message: 'Error fetching tasks', error: error.message });
    }
  },

  // Get a specific task by ID
  getTaskById: async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching task', error: error.message });
    }
  },

  // Create a new task
  createTask: async (req, res) => {
    try {
      const { title, description } = req.body;
      
      if (!title) {
        return res.status(400).json({ message: 'Title is required' });
      }

      const newTask = await Task.create({
        title,
        description,
        completed: false
      });

      res.status(201).json(newTask);
    } catch (error) {
      res.status(500).json({ message: 'Error creating task', error: error.message });
    }
  },

  // Update an existing task
  updateTask: async (req, res) => {
    try {
      const { title, description, completed } = req.body;
      const task = await Task.findById(req.params.id);

      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }

      task.title = title || task.title;
      task.description = description !== undefined ? description : task.description;
      task.completed = completed !== undefined ? completed : task.completed;

      const updatedTask = await task.save();
      res.status(200).json(updatedTask);
    } catch (error) {
      res.status(500).json({ message: 'Error updating task', error: error.message });
    }
  },

  // Delete a task
  deleteTask: async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);

      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }

      await Task.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'Task deleted successfully', id: req.params.id });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting task', error: error.message });
    }
  }
};

module.exports = taskController;
