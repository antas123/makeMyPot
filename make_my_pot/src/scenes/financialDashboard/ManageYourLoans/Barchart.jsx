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

const Barchart = ({ isTrimmed = false, result = [] }) => {
  const data = {
    labels: [...result?.map((res) => res.year)],
    datasets: [
      {
        type: "line",
        label: "Balance",
        borderColor: "#B31312",
        borderWidth: 2,
        data: [...result?.map((res) => res.remainingPrincipal)],
        yAxisID: "second",
      },
      {
        label: "Principal",
        data: [...result?.map((res) => res.newPrincipal)],
        borderWidth: 1,
        backgroundColor: "#7A9D54",
      },
      {
        label: "Interest",
        data: [...result?.map((res) => res.totalInterestPaid)],
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
        min: 0, // Set your minimum value here
        max: 90000,
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
        min: 0, // Set your minimum value here
        max: 500000,
      },
    },
  };

  if (!isTrimmed)
    return (
      <Bar height={"350px"} width={"900px"} data={data} options={options} />
    );

  return (
    <div style={{ backgroundColor: "#f5f7f8", width: "80%", margin: "0 auto" }}>
      <Bar height={"350px"} width={"900px"} data={data} options={options} />
    </div>
  );
};

export default Barchart;
