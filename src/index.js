import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Component/Form/Form";
import Dashboard from "./Component/Pages/Dashboard/Dashboard";
import Employee from "./Component/Pages/Employees/Employee";
import Attendance from "./Component/Pages/Attendance/Attendance";
import Close from "./Component/Pages/Close/Close";
import Preview from "./Component/Pages/Attendance/Preview";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/form" element={<Form />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/employee" element={<Employee/>} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/employee/:employeeId" element={<Preview />} />
        <Route path="/close" element={<Close/>} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
