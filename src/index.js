import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/index.scss";
import App from "./App";
import ProjectPage from "./components/ProjectPage";
import projects from "./components/projectsData";
// import reportWebVitals from '../tests/reportWebVitals';
// import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/:projectName" element={<ProjectPage />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
