// src/App.jsx
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";

function App() {
  // tasks state will hold all created tasks
  const [tasks, setTasks] = useState([]);

  // This callback is passed to the CreateTask component
  // to add a new task to our list.
  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/create">Create Task</Link>
          </li>
          <li>
            <Link to="/tasks">Task List</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/create" element={<CreateTask addTask={addTask} />} />
        <Route path="/tasks" element={<TaskList tasks={tasks} />} />
        {/* Redirect the root route to the task list */}
        <Route path="/" element={<TaskList tasks={tasks} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
