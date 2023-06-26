import {useState} from "react";
import Chart from "react-apexcharts";


const TradingHistoryChart = () => {
  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
  });

  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ]);

  return (
    <div
      className="h-[300px] w-full rounded-md p-[1rem]"
      style={{ boxShadow: "0px 4px 20px -1px rgba(0, 0, 0, 0.25)" }}
    >
      <h2 className="text-center text-[#2173C9] font-bold">Trading History</h2>
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart options={options} series={series} type="bar" width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingHistoryChart;
