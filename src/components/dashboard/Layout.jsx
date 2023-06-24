import React from "react";
import Nav from "../Nav";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <div className="flex">
        <aside className="w-[300px] bg-white fixed left-0 h-[100vh]">
           <Sidebar />   
        </aside>
        <aside className="ml-[300px] mt-[80px] bg-[#DEF] min-h-[100vh] w-full p-[1rem] rounded-[26px]">{children}</aside>
      </div>
    </div>
  );
};

export default Layout;
