import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const StockInventoryChart = () => {
  // eslint-disable-next-line no-unused-vars
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Total Stock",
        data: [44, 55, 41, 64, 22, 43, 21],
      },
      {
        name: "Out Stock",
        data: [53, 32, 33, 52, 13, 44, 32],
      },
    ],

    options: {
      chart: {
        type: "bar",
        height: 450,
      },
      colors: ["var(--highlight-color)", "var(--primary-color)"],
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: "12px",
          colors: ["#fff"],
        },
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"],
      },
      tooltip: {
        shared: true,
        intersect: false,
      },
      xaxis: {
        categories: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
      },
    },
  });

  return (
    <div id="chart" className="bg-white mt-10 pt-4">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={450}
      />
    </div>
  );
};

export default StockInventoryChart;
