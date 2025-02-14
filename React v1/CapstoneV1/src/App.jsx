// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";

function App() {
  // tasks state will hold all created tasks for now until we get our database integration started
  const [tasks, setTasks] = useState([]);

  // This callback is passed to the CreateTask component to add a new task to our list.
  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wraps all the routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          {/* Pass the state and callback as props to these pages */}
          <Route path="create" element={<CreateTask addTask={addTask} />} />
          <Route path="tasks" element={<TaskList tasks={tasks} />} />
          {/* You can redirect "/" or any other path to TaskList if desired */}
          {/* <Route path="/" element={<TaskList tasks={tasks} />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
