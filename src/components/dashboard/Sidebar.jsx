import React from "react";
import profile from "../../assets/profile.png";
import Person2Icon from "@mui/icons-material/Person2";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const activeLink = "bg-[#DEF] text-[#146FF8] w-full activated";
  const normalLink = "";
  return (
    <div className="pt-[100px]">
      <div>
        <h2 className="text-[#146FF8] font-bold text-3xl">Welcome</h2>
        <img
          src={profile}
          alt="logo"
          className="w-[150px] h-[150px] rounded-full mx-auto"
        />
        <h2 className="text-[#146FF8] text-2xl">Chinedu Nwafor </h2>
        <p>Premium Member</p>
      </div>
      <ul className="flex flex-col items-start justify-start  text-left  h-full">
        <NavLink
          to="/dashboards/profile"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <li className="my-[1rem] px-[4rem]">
            <a href="#" className="text-[#2173C9] font-bold">
              <Person2Icon /> Profile
            </a>
          </li>
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <li className="my-[1rem] px-[4rem]">
            <a href="#" className="text-[#2173C9] font-bold">
              <DashboardIcon /> Dashboard
            </a>
          </li>
        </NavLink>
        <NavLink
          to="/dashboards/account"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <li className="my-[1rem] px-[4rem]">
            <a href="#" className="text-[#2173C9] font-bold">
              <CreditCardIcon /> Account
            </a>
          </li>
        </NavLink>
        <NavLink
          to="/dashboards/funding"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <li className="my-[1rem] px-[4rem]">
            <a href="#" className="text-[#2173C9] font-bold">
              <AccountBalanceWalletIcon /> Funding
            </a>
          </li>
        </NavLink>
        <NavLink
          to="/dashboards/help"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <li className="my-[1rem] px-[4rem]">
            <a href="#" className="text-[#2173C9] font-bold">
              <HelpIcon /> Help
            </a>
          </li>
        </NavLink>
        <NavLink
          to="/dashboards/settings"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <li className="my-[1rem] px-[4rem]">
            <a href="#" className="text-[#2173C9] font-bold">
              <SettingsIcon /> Settings
            </a>
          </li>
        </NavLink>
        <NavLink
          to="/dashboardg"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <li className="my-[1rem] px-[4rem]">
            <a href="#" className="text-[#2173C9] font-bold">
              <LogoutIcon /> Signout
            </a>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
