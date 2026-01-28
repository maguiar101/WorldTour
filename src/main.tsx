/**
 * Main entry point for the World Tour application
 * Sets up the React root and renders the App component
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// Create root element and render the application with StrictMode for development checks
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
