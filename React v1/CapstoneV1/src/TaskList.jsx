// src/TaskList.jsx
import React from "react";

function TaskList({ tasks }) {
  return (
    <div>
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index} style={{ marginBottom: "1em" }}>
              {/* Task Title - Always Displayed */}
              <h3>{task.taskTitle}</h3>

              {/* Conditionally render fields only if they have a value */}
              {task.taskOnDate && (
                <p>
                  <strong>On Date:</strong> {task.taskOnDate}
                </p>
              )}
              {task.taskBeforeDate && (
                <p>
                  <strong>Before Date:</strong> {task.taskBeforeDate}
                </p>
              )}
              {task.taskIsDateFlexible && (
                <p>
                  <strong>Date Flexible:</strong> Yes
                </p>
              )}
              {task.taskTimeRequired && (
                <p>
                  <strong>Time Required:</strong> Yes
                </p>
              )}
              {task.taskTimeOfDay && (
                <p>
                  <strong>Time of Day:</strong> {task.taskTimeOfDay}
                </p>
              )}
              {task.taskLocationType && (
                <p>
                  <strong>Location Type:</strong> {task.taskLocationType}
                </p>
              )}
              {task.taskLocation && (
                <p>
                  <strong>Location:</strong> {task.taskLocation}
                </p>
              )}
              {task.taskDetails && (
                <p>
                  <strong>Details:</strong> {task.taskDetails}
                </p>
              )}
              {task.taskBudget && (
                <p>
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
