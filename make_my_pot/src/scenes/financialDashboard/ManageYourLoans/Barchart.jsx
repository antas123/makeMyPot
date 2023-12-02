import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, Tooltip, Legend);

const Barchart = () => {
  const data = {
    labels: [
      "2021",
      "2022",
      "2023",
      "2024",
      "2025",
      "2026",
      "2027",
      "2028",
      "2029",
      "2030",
      "2031",
      "2032",
      "2033",
      "2034",
      "2035",
      "2036",
      "2037",
      "2038",
      "2039",
      "2040",
      "2041",
    ],
    datasets: [
      {
        type: "line",
        label: "Balance",
        borderColor: "#B31312",
        borderWidth: 2,
        data: [
          20, 22, 24, 25, 29, 29, 30, 32, 33, 35, 38, 39, 40, 43, 45, 48, 50,
          53, 55, 59, 60, 65,
        ],
        yAxisID: "second",
      },
      {
        label: "Principal",
        data: [
          3000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000,
          8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000,
        ],
        borderWidth: 1,
        backgroundColor: "#7A9D54",
      },
      {
        label: "Interest",
        data: [
          1200, 2000, 2200, 2500, 2700, 3100, 3500, 3900, 4100, 4500, 4900,
          5500, 5800, 5900, 6000, 6300, 6500, 6600, 7000, 7100, 7500,
        ],
        borderWidth: 1,
        backgroundColor: "orange",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        grid: {
          display: false,
        },
        beginAtZero: true,
        type: "linear",
        position: "left",
        title: {
          display: true,
          text: "Balance",
        },
      },
      second: {
        grid: {
          display: false,
        },
        beginAtZero: true,
        type: "linear",
        position: "right",
        title: {
          display: true,
          text: "EMI Payment/year",
        },
      },
    },
  };

  return (
    <>
      <Bar height={"350px"} width={"900px"} data={data} options={options} />
    </>
  );
};

export default Barchart;
