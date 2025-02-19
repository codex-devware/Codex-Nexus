import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const CustomerStatics = () => {
  const [chartData, setChartData] = useState({
    series: [98, 74, 21, 10],
    options: {
      chart: {
        type: "donut",
      },
      colors: [
        "var(--highlight-color)",
        "var(--secondary-color)",
        "var(--accent-color)",
        "var(--primary-color)",
      ],
      labels: ["Product In-Stock", "Completed", "In-Progress", "Canceled"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });
  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="donut"
      />
    </div>
  );
};

export default CustomerStatics;
