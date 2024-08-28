// Corrected (React 18)
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// This is the target DOM element where your React app will be rendered
const container = document.getElementById("root");

// Create a root and render your application
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
