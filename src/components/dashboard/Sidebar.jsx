import React from "react";
import profile1 from "../../assets/profile1.png";
import Person2Icon from "@mui/icons-material/Person2";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import edit from '../../assets/edit.png'
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";
import component1 from '../../assets/component-1.png'

const Sidebar = () => {
  const activeLink = "bg-[#DEF] text-[#146FF8] rounded-tr-[30px] rounded-br-[30px] w-4/5 activated";
  const normalLink = "";
  return (
    <div >
      <div className="mt-[4rem] text-white mb-[3rem]">

        <div className="flex items-end justify-center">
          <img
            src={profile1}
            alt="logo"
            className="w-[74.1px] h-[74.1px] rounded-full"
          />
          <img src={edit} className='w-[32px] h-[32px]' alt="" />
        </div>
        <h2 className="font-[700] text-[24px] text">Sikiru Agbaje </h2>
        <p className="flex items-center justify-center gap-2 my-[0.5rem]">www.tailors.fitted.ng/sikiru <img src={component1} alt="" /></p>
        <p className="text-[14px] font-[300]">Get measurements from any customer via this link</p>
      </div>
      <ul className="flex flex-col items-start justify-start text-white  text-left  h-full">
        <NavLink
          to="/dashboards/profile"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <li className="my-[1.5rem] px-[4rem]">
            <a href="#" className=" flex gap-7 font-bold">
              <Person2Icon /> Measurements
            </a>
          </li>
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <li className="my-[1.5rem] px-[4rem]">
            <a href="#" className="flex gap-7 font-bold">
              <DashboardIcon /> Orders
            </a>
          </li>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <li className="my-[1.5rem] px-[4rem]">
            <a href="#" className="flex gap-7 font-bold">
              <CreditCardIcon /> Products
            </a>
          </li>
        </NavLink>
        <NavLink
          to="/dashboards/funding"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <li className="my-[1.5rem] px-[4rem]">
            <a href="#" className="flex gap-7 font-bold">
              <AccountBalanceWalletIcon /> Customers
            </a>
          </li>
        </NavLink>
       
        <NavLink
          to="/dashboards/settings"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <li className="my-[1.5rem] px-[4rem]">
            <a href="#" className="flex gap-7 font-bold">
              <SettingsIcon /> Profile
            </a>
          </li>
        </NavLink>
        <NavLink
          to="/dashboardg"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <li className="my-[1.5rem] px-[4rem]">
            <a href="#" className="flex gap-7 font-bold">
              <LogoutIcon /> Signout
            </a>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
