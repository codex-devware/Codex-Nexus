import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ReturnManagementChart = () => {
  // eslint-disable-next-line no-unused-vars
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Successfull Orders",
        data: [
          0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2,
          4.5, 3.9, 3.5, 3,
        ],
      },
      {
        name: "Return Orders",
        data: [
          -0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22,
          -4.3, -4.4, -4.1, -4, -4.1, -3.4, -3.1, -2.8,
        ],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 440,
        stacked: true,
      },
      colors: ["var(--highlight-color)", "var(--primary-color)"],
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "80%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 1,
        colors: ["#fff"],
      },
      grid: {
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      yaxis: {
        min: -5,
        max: 5,
        title: {
          // text: 'Age',
        },
      },
      tooltip: {
        shared: false,
        x: {
          formatter: (val) => val,
        },
        y: {
          formatter: (val) => Math.abs(val) + "%",
        },
      },
      title: {
        text: "Mauritius population pyramid 2011",
      },
      xaxis: {
        categories: [
          "85+",
          "80-84",
          "75-79",
          "70-74",
          "65-69",
          "60-64",
          "55-59",
          "50-54",
          "45-49",
          "40-44",
          "35-39",
          "30-34",
          "25-29",
          "20-24",
          "15-19",
          "10-14",
          "5-9",
          "0-4",
        ],
        title: {
          text: "Percent",
        },
        labels: {
          formatter: (val) => Math.abs(Math.round(val)) + "%",
        },
      },
    },
  });

  return (
    <div id="chart" className="bg-white p-3">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={440}
      />
    </div>
  );
};

export default ReturnManagementChart;
