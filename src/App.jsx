import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Accounts from "./components/dashboard/pages/Accounts";
import Funding from "./components/dashboard/pages/Funding";
import Help from "./components/dashboard/pages/Help";
import Settings from "./components/dashboard/pages/Settings";
import Profile from "./components/dashboard/pages/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Accounts />} />
        <Route path="/dashboards/funding" element={<Funding />} />
        <Route path="/dashboards/help" element={<Help />} />
        <Route path="/dashboards/settings" element={<Settings />} />
        <Route path="/dashboards/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
