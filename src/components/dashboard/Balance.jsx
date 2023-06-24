import React from "react";
import bg from "../../assets/bg.png";
import Donut from "./Donut";
import PositionTable from "./PositionTable";

const Balance = () => {
  return (
    <div className="flex items-center justify-between gap-4 p-[1rem]">
      <aside
        className="basis-[47%] h-[288px] rounded-md  flex"
        style={{ boxShadow: " 0px 4px 20px -1px rgba(0, 0, 0, 0.25)" }}
      >
        <div className="w-[78%] p-[0.5rem]">
          <img src={bg} alt="" className="w-full h-full object-fill" />
        </div>
        <div className="py-[1.7rem]">
          <figure
            className="rounded-md min-w-[105px] h-[44px] p-[0.5rem] mb-[1rem]"
            style={{ background: "rgba(98, 146, 218, 0.22)" }}
          >
            <h2 className="text-[15px] font-bold text-[#2173C9]">560%</h2>
            <p className="text-[8px] text-[#2173C9]">Account ROI</p>
          </figure>
          <figure
            className="rounded-md min-w-[105px] h-[44px] p-[0.5rem] mb-[1rem]"
            style={{ background: "rgba(43, 250, 255, 0.22)" }}
          >
            <h2 className="text-[15px] font-bold text-[#2173C9]">50%</h2>
            <p className="text-[8px] text-[#2173C9]">Trade Success</p>
          </figure>
          <figure
            className="rounded-md min-w-[105px] h-[44px] p-[0.5rem] mb-[1rem]"
            style={{ background: "rgba(204, 4, 164, 0.22)" }}
          >
            <h2 className="text-[15px] font-bold text-[#2173C9]">$560</h2>
            <p className="text-[8px] text-[#2173C9]">This month</p>
          </figure>
          <figure
            className="rounded-md min-w-[105px] h-[44px] p-[0.5rem] mb-[1rem]"
            style={{ background: "rgba(166, 200, 251, 0.22)" }}
          >
            <h2 className="text-[15px] font-bold text-[#2173C9]">56</h2>
            <p className="text-[8px] text-[#2173C9]">Total Trades</p>
          </figure>
        </div>
      </aside>
      <aside
        className="basis-[47%] h-[288px] rounded-md  flex justify-between"
        style={{
          boxShadow: " 0px 4px 20px -1px rgba(0, 0, 0, 0.25)",
          width: "50%",
        }}
      >
        <div className=" flex items-center justify-center">
          <Donut />
        </div>
        <div className="basis-[70%] w-[70%] overflow-hidden">
          <PositionTable />
          <button className="rounded-md bg-[#2173C9] w-4/5 p-[0.5rem] block m-[1rem] text-white font-bold">See All Positions</button>
        </div>
      </aside>
    </div>
  );
};

export default Balance;
