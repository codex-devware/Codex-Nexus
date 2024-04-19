import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { CiFilter } from "react-icons/ci";

const RevenueAnalyticsSaleGraph = () => {
  // eslint-disable-next-line no-unused-vars
  const [chartState, setChartState] = useState({
    series: [
      {
        name: "Income",
        data: [
          [1609459200000, 40],
          [1609545600000, 45],
          [1609632000000, 35],
          [1609718400000, 50],
          [1609804800000, 55],
          [1609891200000, 48],
          [1609977600000, 52],
          [1610064000000, 60],
          [1610150400000, 58],
          [1610236800000, 55],
        ],
      },
    ],
    options: {
      chart: {
        type: "area",
        stacked: false,
        height: 350,
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: "zoom",
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },

      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return (val / 1000000).toFixed(0);
          },
        },
        title: {
          text: "Price",
        },
      },
      xaxis: {
        type: "datetime",
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return (val / 1000000).toFixed(0);
          },
        },
      },
    },
  });

  return (
    <div id="chart" className=" my-5">
      <div className=" flex justify-between">
        <div className=" ml-3">
          <h1 className=" text-sm sm:text-lg font-medium">
            Total Sale Analytics
          </h1>
          <h2 className=" text-md sm:text-xl font-sora font-bold">
            $68000
            <span className=" text-xs ml-2 text-green-600">+20%</span>
          </h2>
        </div>
        <div>
          <button className="hover:translate-y-[-2px] dark:bg-white dark:text-[#1E293B] duration-300 ease-in-out flex text-[16px] flex-wrap items-center gap-1 border-2 py-1 px-3 rounded-md font-outfit font-medium">
            <span className="text-[#1E40AF] ">
              <CiFilter />
            </span>{" "}
            Filter
          </button>
        </div>
      </div>
      <ReactApexChart
        options={chartState.options}
        series={chartState.series}
        type="area"
        height={350}
        className={"darkChart"}
      />
    </div>
  );
};

export default RevenueAnalyticsSaleGraph;
