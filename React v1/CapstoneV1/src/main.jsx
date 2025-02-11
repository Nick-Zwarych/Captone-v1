import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Hooks up main code to index.html

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
