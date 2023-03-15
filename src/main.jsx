import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <SkeletonTheme baseColor="#17252A" highlightColor="#2B7A78">
        <App />
      </SkeletonTheme>
    </Router>
  </React.StrictMode>
);
