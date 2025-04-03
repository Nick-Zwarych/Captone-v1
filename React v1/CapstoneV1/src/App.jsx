// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "./pages/Auth"; // Login/Register Page
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";
import BlogPosts from "./BlogPosts";
import AirtaskerGuidelines from "./AirtaskerGuidelines";

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
        {/* LOGIN PAGE (Separate from Layout) */}
        <Route path="/login" element={<Auth />} />

        {/* Layout wraps all the routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          {/* Pass the state and callback as props to these pages */}
          <Route path="create" element={<CreateTask addTask={addTask} />} />
          <Route path="tasks" element={<TaskList tasks={tasks} />} />
          {/* Can redirect "/" or any other path to TaskList if desired */}
          {/* <Route path="/" element={<TaskList tasks={tasks} />} /> */}
          <Route path="blog" element={<BlogPosts />} />
          <Route path="guidelines" element={<AirtaskerGuidelines />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
