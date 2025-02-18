import ReactApexChart from "react-apexcharts";

const PaymentInfoGraph = () => {
  const options = {
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
    colors: ["var(--highlight-color)","var(--secondary-color)"],
    chart: {
      height: 350,
      type: "area",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
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
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <div id="chart" className="mt-6">
      <ReactApexChart
        options={options}
        series={options.series}
        type="area"
        height={300}
      />
    </div>
  );
};

export default PaymentInfoGraph;
