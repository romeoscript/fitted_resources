import React from "react";
import customercare from "../assets/customercare.png";
import expert from "../assets/expert.png";
import financial from "../assets/financial.png";
import time from "../assets/time.png";

const Gains = () => {
  const gainss = [
    {
      img: customercare,
      title: "24/7 customer care",
      description: "Always on call to answer your calls",
    },
    {
      img: expert,
      title: "Expertly Researched",
      description: " Expertly Researched Stocks and index",
    },
    {
      img: time,
      title: "Instant Execution",
      description: " Instant traade execution",
    },
    {
      img: financial,
      title: "Friendly Interface Easily",
      description: " understandable interface",
    },
  ];

  return (
    <div className="flex items-center justify-center gap-4 mb-[4rem]">
      {gainss.map((gains) => {
        return (
          <aside className="p-[1rem] flex flex-col items-center justify-center ">
            <img src={gains.img} alt="" className="mb-[1rem] h-[222px] w-[222px] object-contain"/>
            <h1 className="text-[#2173C9] font-bold text-xl mb-[1rem]">{gains.title}</h1>
            <p>{gains.description}</p>
          </aside>
        );
      })}
    </div>
  );
};

export default Gains;
