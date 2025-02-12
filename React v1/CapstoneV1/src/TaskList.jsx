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
              <h3>{task.taskTitle}</h3>
              <p>
                <strong>On Date:</strong> {task.taskOnDate}
              </p>
              <p>
                <strong>Before Date:</strong> {task.taskBeforeDate}
              </p>
              <p>
                <strong>Date Flexible:</strong>{" "}
                {task.taskIsDateFlexible ? "Yes" : "No"}
              </p>
              <p>
                <strong>Time Required:</strong>{" "}
                {task.taskTimeRequired ? "Yes" : "No"}
              </p>
              <p>
                <strong>Time of Day:</strong> {task.taskTimeOfDay}
              </p>
              <p>
                <strong>Location Type:</strong> {task.taskLocationType}
              </p>
              <p>
                <strong>Location:</strong> {task.taskLocation}
              </p>
              <p>
                <strong>Details:</strong> {task.taskDetails}
              </p>
              <p>
                <strong>Budget:</strong> {task.taskBudget}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
