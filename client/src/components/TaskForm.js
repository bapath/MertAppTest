import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!title.trim()) {
      setError('Title is required');
      return;
    }
    
    // Create new task object
    const newTask = {
      title,
      description
    };
    
    // Call the onAddTask function with the new task
    onAddTask(newTask);
    
    // Reset form
    setTitle('');
    setDescription('');
    setError('');
  };

  return (
    <div className="task-form-container">
      <h2>Add New Task</h2>
      
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            className="form-control"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description (optional)"
            className="form-control"
            rows="3"
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
