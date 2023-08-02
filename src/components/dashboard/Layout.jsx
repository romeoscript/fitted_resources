import { Calculate } from "@mui/icons-material";
import { useState } from "react";
import React from "react";
import Nav from "../Nav";
import Sidebar from "./Sidebar";


const Layout = ({ children }) => {
  const [mobile, setMobile] = useState(false);

  const changeMobile = () => {
    setMobile(!mobile);
  };
  return (
    <div>
      <Nav change={changeMobile}  mobile={mobile}/>
      <div className="flex">

        <aside className="w-[335px] md:block hidden bg-white fixed left-0 h-[100vh] z-[300]" style={{ background: 'var(--grad, linear-gradient(171deg, rgba(0, 240, 255, 0.80) 8.85%, rgba(83, 118, 255, 0.80) 42.71%, rgba(0, 12, 182, 0.80) 100%))' }}>
          <Sidebar />
        </aside>
        {/* <aside className="w-[335px] bg-white fixed left-0 h-[100vh] z-[300]" style={{ background: 'var(--grad, linear-gradient(171deg, rgba(0, 240, 255, 0.80) 8.85%, rgba(83, 118, 255, 0.80) 42.71%, rgba(0, 12, 182, 0.80) 100%))' }}>
          <Sidebar />
        </aside> */}
        <aside className="md:ml-[335px] fixed z-[300] mt-[80px] bg-[#DEF] min-h-[100vh] p-[1rem] rounded-[26px]" style={{ width: 'calc(100% - 335px)' }}>
          {children}
        </aside>

      </div>
    </div>
  );
};

export default Layout;
