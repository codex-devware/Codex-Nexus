import { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";

const PaymentInfoGraph = () => {
  // console.log("Hello");
  // eslint-disable-next-line no-unused-vars
  const [chartOptions, setChartOptions] = useState({
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        new Date("2018-09-19T00:00:00.000Z").getTime(),
        new Date("2018-09-19T01:30:00.000Z").getTime(),
        new Date("2018-09-19T02:30:00.000Z").getTime(),
        new Date("2018-09-19T03:30:00.000Z").getTime(),
        new Date("2018-09-19T04:30:00.000Z").getTime(),
        new Date("2018-09-19T05:30:00.000Z").getTime(),
        new Date("2018-09-19T06:30:00.000Z").getTime(),
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  });

  useEffect(() => {
    const chart = new ApexCharts(
      document.querySelector("#chart"),
      chartOptions
    );
    chart.render();

    // Cleanup when component unmounts
    return () => {
      chart.destroy();
    };
  }, [chartOptions]);

  return <div id="chart"></div>;
};

export default PaymentInfoGraph;
