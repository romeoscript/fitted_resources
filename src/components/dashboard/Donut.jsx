import React from 'react';
import Chart from 'react-apexcharts';

const Donut = () => {
  const options = {
    legend: {
      show: false // Set show to false to hide the legend
    }
  };
  const series = [44, 55, 41, 17, 15];
  const labels = ['A', 'B', 'C', 'D', 'E'];

  return (
    <div className="donut w-full">
      <Chart options={options} series={series} type="donut" width="80%" />
    </div>
  );
};

export default Donut;
