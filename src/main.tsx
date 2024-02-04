import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootContainer = document.body;

createRoot(rootContainer!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
