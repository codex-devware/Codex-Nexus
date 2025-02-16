import { useState } from "react";
import Chart from "react-apexcharts";

export default function SaleTrends() {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
  });

  const handleDataUpdate = () => {
    setChartData({
      ...chartData,
      series: [
        {
          name: "updated-series",
          data: [50, 60, 55, 70, 69, 80, 90, 111, 145],
        },
      ],
    });
  };

  return (
    <div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        width={500}
        height={320}
      />
      <button onClick={handleDataUpdate}>Update Data</button>
      <div style={{ height: "20px", backgroundColor: "lightgray" }}></div>
    </div>
  );
}
