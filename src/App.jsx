import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Accounts from "./components/dashboard/pages/Accounts";
import Funding from "./components/dashboard/pages/Funding";
import Help from "./components/dashboard/pages/Help";
import Settings from "./components/dashboard/pages/Settings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboards/account" element={<Accounts />} />
        <Route path="/dashboards/funding" element={<Funding />} />
        <Route path="/dashboards/help" element={<Help />} />
        <Route path="/dashboards/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
