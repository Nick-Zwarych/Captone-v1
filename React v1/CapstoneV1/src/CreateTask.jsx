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
    taskAfterDate: "", // <--- Add this field
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

  // UPDATED change handler dealing with changes to time of day
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "taskTimeRequired") {
      setTaskData((prev) => {
        const newData = { ...prev, taskTimeRequired: checked };
        // When unchecked, clear taskTimeOfDay. When checked and empty, default to "morning"
        if (!checked) {
          newData.taskTimeOfDay = "";
        } else if (!prev.taskTimeOfDay) {
          newData.taskTimeOfDay = "morning";
        }
        return newData;
      });
    } else {
      setTaskData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  // Validation function for Step 1
  const validateStep1 = () => {
    // Ensure at least one of Task Before Date, Task After Date, or Is Date Flexible is selected
    if (
      taskData.taskBeforeDate.trim() === "" &&
      taskData.taskAfterDate.trim() === "" &&
      !taskData.taskIsDateFlexible
    ) {
      return false;
    }
    return true;
  };

  // Move to the next step with validation on step 1
  const nextStep = () => {
    // Removed e.preventDefault() here because it's already handled in the onSubmit wrapper.
    if (step === 1) {
      if (!validateStep1()) {
        alert(
          "Please select at least one option: either Task Before Date, Task After Date, or Is Date Flexible."
        );
        return; // Stop processing if validation fails
      }
    }
    setStep((prev) => prev + 1);
  };

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
            {/* Optionally include a Task Title */}
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

            {/* Task Before Date */}
            <div>
              <label>
                Task Before Date:
                <input
                  type="date"
                  name="taskBeforeDate"
                  value={taskData.taskBeforeDate}
                  onChange={handleChange}
                />
              </label>
            </div>

            {/* Task After Date */}
            <div>
              <label>
                Task After Date:
                <input
                  type="date"
                  name="taskAfterDate"
                  value={taskData.taskAfterDate}
                  onChange={handleChange}
                />
              </label>
            </div>

            {/* Is Date Flexible? */}
            <div>
              <label>
                Is Date Flexible?
                <input
                  type="checkbox"
                  name="taskIsDateFlexible"
                  checked={taskData.taskIsDateFlexible}
                  onChange={handleChange}
                />
              </label>
            </div>

            {/* Only show Time Required if at least one option is selected */}
            {(taskData.taskBeforeDate.trim() !== "" ||
              taskData.taskAfterDate.trim() !== "" ||
              taskData.taskIsDateFlexible) && (
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
              </div>
            )}

            {/* Show Time of Day only if Time Required is checked */}
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
