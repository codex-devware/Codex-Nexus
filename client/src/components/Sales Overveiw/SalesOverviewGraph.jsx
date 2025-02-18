import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const SalesOverviewGraph = () => {
  // eslint-disable-next-line no-unused-vars
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "sales",
        data: [
          { x: "2024/01/01", y: 400 },
          { x: "2024/02/01", y: 330 },
          { x: "2024/03/01", y: 448 },
          { x: "2024/04/01", y: 470 },
          { x: "2024/05/01", y: 320 },
          { x: "2024/06/01", y: 280 },
        ],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 380,
      },
      colors: ["var(--secondary-color)"],
      xaxis: {
        type: "category",
        labels: {
          formatter: (val) => {
            const date = new Date(val);
            return `${date.toLocaleString("default", {
              month: "short",
            })} `;
          },
        },
      },
      title: {
        text: "Monthly Sales Overview",
      },
      tooltip: {
        x: {
          formatter: (val) => {
            const date = new Date(val);
            return `${date.toLocaleString("default", {
              month: "short",
            })} ${date.getFullYear()}`;
          },
        },
      },

      plotOptions: {
        bar: {
          columnWidth: "40%",
          borderRadius: 6,
        },
      },
      dataLabels: {
        enabled: false,
      },
    },
  });

  return (
    <div className="bg-white" id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={380}
      />
    </div>
  );
};

export default SalesOverviewGraph;
