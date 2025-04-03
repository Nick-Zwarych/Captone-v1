// src/TaskList.jsx
import React from "react";
import "../src/styles/TaskList.css";

function TaskList({ tasks }) {
  return (
    <div className="task-list-container">
      <h2 className="task-list-title">Browse Task List</h2>
      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks available.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-card">
              {/* Task Title - Always Displayed */}
              <h3 className="task-title">{task.taskTitle}</h3>

              {/* Conditionally render fields only if they have a value */}
              {task.taskOnDate && (
                <p className="task-meta">
                  <strong>On Date:</strong> {task.taskOnDate}
                </p>
              )}
              {task.taskBeforeDate && (
                <p className="task-meta">
                  <strong>Before Date:</strong> {task.taskBeforeDate}
                </p>
              )}
              {task.taskIsDateFlexible && (
                <p className="task-meta">
                  <strong>Date Flexible:</strong> Yes
                </p>
              )}
              {task.taskTimeRequired && (
                <p className="task-meta">
                  <strong>Time Required:</strong> Yes
                </p>
              )}
              {task.taskTimeOfDay && (
                <p className="task-meta">
                  <strong>Time of Day:</strong> {task.taskTimeOfDay}
                </p>
              )}
              {task.taskLocationType && (
                <p className="task-meta">
                  <strong>Location Type:</strong> {task.taskLocationType}
                </p>
              )}
              {task.taskLocation && (
                <p className="task-meta"> 
                  <strong>Location:</strong> {task.taskLocation}
                </p>
              )}
              {task.taskDetails && (
                <p className="task-meta">
                  <strong>Details:</strong> {task.taskDetails}
                </p>
              )}
              {task.taskBudget && (
                <p className="task-meta">
                  <strong>Budget:</strong> {task.taskBudget}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
