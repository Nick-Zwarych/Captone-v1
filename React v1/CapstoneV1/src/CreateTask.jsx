// src/CreateTask.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../src/styles/CreateTask.css";

function CreateTask({ addTask }) {
  const [step, setStep] = useState(1);
  const [taskData, setTaskData] = useState({
    // Page One
    taskTitle: "",
    taskBeforeDate: "",
    taskAfterDate: "",
    taskIsDateFlexible: false,
    taskTimeRequired: false,
    taskTimeOfDay: "",
    // Page Two
    taskLocationType: "in-person",
    taskLocation: "",
    // Page Three
    taskDetails: "",
    // Page Four
    taskBudget: "",
    taskEmail: "", // ✅ Added email field
  });

  const navigate = useNavigate();

  // Handle changes and enforce exclusivity
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setTaskData((prev) => {
      let newData = { ...prev };

      if (name === "taskBeforeDate") {
        newData = {
          ...newData,
          taskBeforeDate: value, // Update before date
          taskAfterDate: "", // Clear after date
          taskIsDateFlexible: false, // Uncheck flexible
        };
      } else if (name === "taskAfterDate") {
        newData = {
          ...newData,
          taskAfterDate: value, // Update after date
          taskBeforeDate: "", // Clear before date
          taskIsDateFlexible: false, // Uncheck flexible
        };
      } else if (name === "taskIsDateFlexible") {
        newData = {
          ...newData,
          taskIsDateFlexible: checked, // Update flexible
          taskBeforeDate: "", // Clear before date
          taskAfterDate: "", // Clear after date
        };
      } else {
        newData[name] = type === "checkbox" ? checked : value;
      }

      return newData;
    });
  };

  // Email format validation function
  const validateEmailFormat = (email) => {
    const regex = /^[A-Za-z]{3,}[A-Za-z0-9._%+-]*@[A-Za-z0-9.-]+\.(com|ca)$/;
    return regex.test(email);
  };

  // Validation function for Step 1
  const validateStep1 = () => {
    // Ensure that exactly one of Task Before Date, Task After Date, or Is Date Flexible is selected
    const selectedOptions = [
      taskData.taskBeforeDate.trim() !== "",
      taskData.taskAfterDate.trim() !== "",
      taskData.taskIsDateFlexible,
    ].filter(Boolean).length;

    return selectedOptions === 1; // Only allow exactly one selection
  };

  // Move to the next step with validation on step 1
  const nextStep = () => {
    if (step === 1) {
      if (!validateStep1()) {
        alert(
          "Please select only ONE option: Task Before Date, Task After Date, or Is Date Flexible."
        );
        return;
      }
    }
    setStep((prev) => prev + 1);
  };

  // Move to the previous step
  const prevStep = () => setStep((prev) => prev - 1);

  // On final submit, add the task and navigate to the task list page
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check email format before submitting
    if (!validateEmailFormat(taskData.taskEmail)) {
      alert(
        "Please enter a valid email address ending in .com or .ca with at least 3 starting letters."
      );
      return;
    }

    addTask(taskData);
    navigate("/tasks");
  };

  return (
    <div className="create-task-container">
      <h2 className="create-task-title">Create Task (Step {step} of 4)</h2>
      <form
        className="create-task-from"
        onSubmit={
          // When on step 4, handle submit; otherwise, go to the next step.
          step === 4
            ? handleSubmit
            : (e) => {
                e.preventDefault();
                nextStep();
              }
        }
      >
        {step === 1 && (
          <div className="form-step">
            {/* Task Title */}
            <div className="form-group">
              <label>Task Title:</label>
              <input
                type="text"
                name="taskTitle"
                value={taskData.taskTitle}
                onChange={handleChange}
                required
              />
            </div>

            {/* Task Before Date */}
            <div className="form-group">
              <label>Task Before Date:</label>
              <input
                type="date"
                name="taskBeforeDate"
                value={taskData.taskBeforeDate}
                onChange={handleChange}
                disabled={taskData.taskAfterDate || taskData.taskIsDateFlexible}
              />
            </div>

            {/* Task After Date */}
            <div className="form-group">
              <label>Task After Date:</label>
              <input
                type="date"
                name="taskAfterDate"
                value={taskData.taskAfterDate}
                onChange={handleChange}
                disabled={
                  taskData.taskBeforeDate || taskData.taskIsDateFlexible
                }
              />
            </div>

            {/* Is Date Flexible? */}
            <div className="form-group checkbox-group">
              <label>
                Is Date Flexible?
                <input
                  type="checkbox"
                  name="taskIsDateFlexible"
                  checked={taskData.taskIsDateFlexible}
                  onChange={handleChange}
                  disabled={taskData.taskBeforeDate || taskData.taskAfterDate}
                />
              </label>
            </div>

            {/* Only show Time Required if at least one option is selected */}
            {(taskData.taskBeforeDate ||
              taskData.taskAfterDate ||
              taskData.taskIsDateFlexible) && (
              <div className="form-group checkbox-group">
                <label>
                  Time Required:
                  <input
                    type="checkbox"
                    name="taskTimeRequired"
                    checked={taskData.taskTimeRequired}
                    onChange={handleChange}
                  />
                </label>
              </div>
            )}

            {/* Show Time of Day only if Time Required is checked */}
            {taskData.taskTimeRequired && (
              <div className="form-group">
                <label>
                  Time of Day:&nbsp;&nbsp;
                  <select
                    name="taskTimeOfDay"
                    value={taskData.taskTimeOfDay}
                    onChange={handleChange}
                  >
                    <option value="morning">Morning</option>
                    <option value="midday">Midday</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                  </select>
                </label>
              </div>
            )}
          </div>
        )}

        {step === 2 && (
          <div className="form-step">
            <div className="form-group">
              <label>
                Location Type:&nbsp;&nbsp;
                <select
                  name="taskLocationType"
                  value={taskData.taskLocationType}
                  onChange={handleChange}
                >
                  <option value="in-person">In-person</option>
                  <option value="online">Online</option>
                </select>
              </label>
            </div>
            <div className="form-group ">
              <label>
                Location - Postal Code:&nbsp;&nbsp;
                <input
                  type="text"
                  name="taskLocation"
                  value={taskData.taskLocation}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="form-step">
            <div className="form-group">
              <label>Task Details:</label>
              <textarea
                name="taskDetails"
                value={taskData.taskDetails}
                onChange={handleChange}
                required
              />
            </div>
            {/* You can add taskImages upload later */}
          </div>
        )}

        {step === 4 && (
          <div className="form-step">
            <div className="form-group">
              <label>
                Task Budget:&nbsp;&nbsp;
                <input
                  type="number"
                  step="0.01"
                  name="taskBudget"
                  value={taskData.taskBudget}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label>
                Email:&nbsp;&nbsp;
                <input
                  type="email"
                  name="taskEmail"
                  value={taskData.taskEmail}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <button className="submit-btn" type="submit">
              Create Task
            </button>
          </div>
        )}

        <div className="step-controls">
          {step > 1 && (
            <button type="button" className="back-btn" onClick={prevStep}>
              Back
            </button>
          )}
          {step < 4 && (
            // The “Next” button will submit the form to trigger nextStep (if not on step 4)
            <button
              type="submit"
              className="next-btn"
              style={{ marginLeft: "1em" }}
            >
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
