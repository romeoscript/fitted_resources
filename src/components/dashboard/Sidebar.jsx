import React from "react";
import profile from "../../assets/profile.png";

const Sidebar = () => {
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
      <ul className="flex flex-col items-center justify-start  h-full">
        <li className="my-[1rem]">
          <a href="#" className="text-[#2173C9] font-bold">
            Dashboard
          </a>
        </li>
        <li className="my-[1rem]">
          <a href="#" className="text-[#2173C9] font-bold">
            Dashboard
          </a>
        </li>
        <li className="my-[1rem]">
          <a href="#" className="text-[#2173C9] font-bold">
            Dashboard
          </a>
        </li>
        <li className="my-[1rem]">
          <a href="#" className="text-[#2173C9] font-bold">
            Dashboard
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
