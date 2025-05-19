import React from 'react';

const TaskItem = ({ task, onUpdateTask, onDeleteTask }) => {
  // Toggle the completed status of a task
  const handleToggleComplete = () => {
    onUpdateTask(task._id, {
      ...task,
      completed: !task.completed
    });
  };

  // Delete a task
  const handleDeleteTask = () => {
    // Confirm before deleting
    if (window.confirm('Are you sure you want to delete this task?')) {
      onDeleteTask(task._id);
    }
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <h3 className="task-title">{task.title}</h3>
        {task.description && <p className="task-description">{task.description}</p>}
        <div className="task-meta">
          <small>Created: {new Date(task.createdAt).toLocaleString()}</small>
        </div>
      </div>
      
      <div className="task-actions">
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleToggleComplete}
          />
          <span className="checkmark"></span>
          {task.completed ? 'Completed' : 'Mark Complete'}
        </label>
        
        <button
          onClick={handleDeleteTask}
          className="btn btn-delete"
          aria-label="Delete task"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
