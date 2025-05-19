import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onUpdateTask, onDeleteTask }) => {
  // If no tasks are available
  if (tasks.length === 0) {
    return <div className="no-tasks">No tasks available. Add your first task!</div>;
  }

  return (
    <div className="task-list">
      <h2>Your Tasks</h2>
      
      {/* Filter and display incomplete tasks first */}
      <div className="tasks-container">
        {tasks
          .sort((a, b) => {
            // Sort by completion status and then by creation date (newest first)
            if (a.completed === b.completed) {
              return new Date(b.createdAt) - new Date(a.createdAt);
            }
            return a.completed ? 1 : -1;
          })
          .map((task) => (
            <TaskItem
              key={task._id}
              task={task}
              onUpdateTask={onUpdateTask}
              onDeleteTask={onDeleteTask}
            />
          ))}
      </div>
    </div>
  );
};

export default TaskList;
