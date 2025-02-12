// src/CreateTask.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateTask({ addTask }) {
  const [step, setStep] = useState(1);
  const [taskData, setTaskData] = useState({
    // Page One
    taskTitle: "",
    // Use this field to track which date option is selected: "onDate" or "beforeDate"
    dateOption: "onDate",
    taskOnDate: "",
    taskBeforeDate: "",
    taskIsDateFlexible: false,
    taskTimeRequired: false,
    taskTimeOfDay: "", // options: morning, midday, afternoon, evening - starts with an empty state
    // Page Two
    taskLocationType: "in-person", // options: in-person, online
    taskLocation: "",
    // Page Three
    taskDetails: "",
    // taskImages: (to be added later)
    // Page Four
    taskBudget: "",
  });

  const navigate = useNavigate();

  // Generic change handler for inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTaskData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Move to the next step
  const nextStep = () => setStep((prev) => prev + 1);
  // Move to the previous step
  const prevStep = () => setStep((prev) => prev - 1);

  // On final submit, add the task and navigate to the task list page
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskData);
    navigate("/tasks");
  };

  return (
    <div>
      <h2>Create Task (Step {step} of 4)</h2>
      <form
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
          <div>
            {/* Task Title */}
            <div>
              <label>
                Task Title:
                <input
                  type="text"
                  name="taskTitle"
                  value={taskData.taskTitle}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            {/* Date Flexible Checkbox */}
            <div>
              <label>
                Is Date Flexible?
                <input
                  type="checkbox"
                  name="taskIsDateFlexible"
                  checked={taskData.taskIsDateFlexible}
                  onChange={(e) => {
                    // Update the taskData and optionally clear out date values
                    handleChange(e);
                    if (e.target.checked) {
                      // If the date is flexible, clear the date fields.
                      setTaskData((prev) => ({
                        ...prev,
                        taskOnDate: "",
                        taskBeforeDate: "",
                      }));
                    }
                  }}
                />
              </label>
            </div>

            {/* If date is NOT flexible, let the user pick a date option */}
            {!taskData.taskIsDateFlexible && (
              <div>
                <p>Select a Date Option:</p>
                <label>
                  <input
                    type="radio"
                    name="dateOption"
                    value="onDate"
                    checked={taskData.dateOption === "onDate"}
                    onChange={handleChange}
                  />
                  Specific Date
                </label>
                <label>
                  <input
                    type="radio"
                    name="dateOption"
                    value="beforeDate"
                    checked={taskData.dateOption === "beforeDate"}
                    onChange={handleChange}
                  />
                  Before Date
                </label>

                {/* Render the appropriate date input based on the selected option */}
                {taskData.dateOption === "onDate" && (
                  <div>
                    <label>
                      Task On Date:
                      <input
                        type="date"
                        name="taskOnDate"
                        value={taskData.taskOnDate}
                        onChange={handleChange}
                        required
                      />
                    </label>
                  </div>
                )}
                {taskData.dateOption === "beforeDate" && (
                  <div>
                    <label>
                      Task Before Date:
                      <input
                        type="date"
                        name="taskBeforeDate"
                        value={taskData.taskBeforeDate}
                        onChange={handleChange}
                        required
                      />
                    </label>
                  </div>
                )}
              </div>
            )}

            {/* If date is flexible, show the Time Required option */}
            {taskData.taskIsDateFlexible && (
              <div>
                <label>
                  Time Required:
                  <input
                    type="checkbox"
                    name="taskTimeRequired"
                    checked={taskData.taskTimeRequired}
                    onChange={handleChange}
                  />
                </label>

                {/* If time is required, show the Time of Day selection */}
                {taskData.taskTimeRequired && (
                  <div>
                    <label>
                      Time of Day:
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
          </div>
        )}

        {step === 2 && (
          <div>
            <div>
              <label>
                Location Type:
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
            <div>
              <label>
                Location:
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
          <div>
            <div>
              <label>
                Task Details:
                <textarea
                  name="taskDetails"
                  value={taskData.taskDetails}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            {/* You can add taskImages upload later */}
          </div>
        )}

        {step === 4 && (
          <div>
            <div>
              <label>
                Task Budget:
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
            <button type="submit">Create Task</button>
          </div>
        )}

        <div style={{ marginTop: "1em" }}>
          {step > 1 && (
            <button type="button" onClick={prevStep}>
              Back
            </button>
          )}
          {step < 4 && (
            // The “Next” button will submit the form to trigger nextStep (if not on step 4)
            <button type="submit" style={{ marginLeft: "1em" }}>
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
