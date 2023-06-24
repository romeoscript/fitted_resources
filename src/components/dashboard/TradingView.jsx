import React from "react";
import TradingViewWidget from "./ForexMap";
import LineChart from "./LineChart";

const TradingView = () => {
  return (
    <section className="flex p-[1rem]">
      <aside style={{boxShadow:'0px 4px 20px -1px rgba(0, 0, 0, 0.25)'}} className="rounded-md w-[66%] h-[487px]">
        <TradingViewWidget />
        <LineChart />
      </aside>
      <aside></aside>
    </section>
  );
};

export default TradingView;
