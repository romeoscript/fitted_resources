import React from "react";
import TradingViewWidget from "./ForexMap";
import LineChart from "./LineChart";
import TradingHistoryChart from "./TradingHistoryChart";

const TradingView = () => {
  return (
    <section className="flex p-[1rem] justify-between">
      <aside
        style={{ boxShadow: "0px 4px 20px -1px rgba(0, 0, 0, 0.25)" }}
        className="rounded-md w-[66%] h-[487px]"
      >
        <TradingViewWidget />
        <LineChart />
      </aside>
      <aside
       
        className="w-[30%] rounded-md h-[487px]"
      >
        <TradingHistoryChart />
      </aside>
    </section>
  );
};

export default TradingView;
