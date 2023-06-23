import React from "react";
import potuswrapper from "../assets/potuswrapper.png";

const Wrapper = () => {
  return (
    <div className="h-[70vh] flex items-center justify-around p-[4rem]">
      <aside className="basis-[40%] text-left">
        <p className="text-[#2173C9] text-[44px] font-bold">Safe Trades <span className='font-normal'>and</span> Zero Commission</p>
        <button className="rounded px-[2.5rem] bg-[#2173C9] py-[0.5rem] text-white font-bold">Get Started</button>
      </aside>
      <aside>
        <img src={potuswrapper} alt="" />
      </aside>
    </div>
  );
};

export default Wrapper;
