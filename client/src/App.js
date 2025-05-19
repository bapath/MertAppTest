import React, { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskService from './services/taskService';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all tasks when component mounts
  useEffect(() => {
    fetchTasks();
  }, []);

  // Fetch all tasks from the API
  const fetchTasks = async () => {
    try {
      setIsLoading(true);
      const tasks = await TaskService.getAllTasks();
      setTasks(tasks);
      setError(null);
    } catch (error) {
      setError('Failed to fetch tasks. Please try again later.');
      console.error('Error fetching tasks:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Add a new task
  const handleAddTask = async (newTask) => {
    try {
      setIsLoading(true);
      const createdTask = await TaskService.createTask(newTask);
      setTasks([createdTask, ...tasks]);
    } catch (error) {
      setError('Failed to add task. Please try again.');
      console.error('Error adding task:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Update an existing task
  const handleUpdateTask = async (id, updatedTask) => {
    try {
      setIsLoading(true);
      const result = await TaskService.updateTask(id, updatedTask);
      setTasks(tasks.map(task => task._id === id ? result : task));
    } catch (error) {
      setError('Failed to update task. Please try again.');
      console.error('Error updating task:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Delete a task
  const handleDeleteTask = async (id) => {
    try {
      setIsLoading(true);
      await TaskService.deleteTask(id);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (error) {
      setError('Failed to delete task. Please try again.');
      console.error('Error deleting task:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>MERN Task Manager</h1>
      </header>
      <main className="container">
        {error && <div className="error-banner">{error}</div>}
        
        <TaskForm onAddTask={handleAddTask} />
        
        {isLoading && tasks.length === 0 ? (
          <div className="loading">Loading tasks...</div>
        ) : (
          <TaskList 
            tasks={tasks}
            onUpdateTask={handleUpdateTask}
            onDeleteTask={handleDeleteTask}
          />
        )}
      </main>
      <footer className="App-footer">
        <p>MERN Stack Task Manager &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
