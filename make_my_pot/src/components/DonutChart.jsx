import React from "react";
import { Doughnut } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    labels: ["red", "yellow", "green"],
    datasets: [
      {
        label: "Shop 1",
        data: [50, 25, 25],
        backgroundColor: ["red", "yellow", "green"],
        borderColor: ["gray", "black", "black"],
        circumference: 180,
        rotation: 270,
      },
    ],
  };

  const options = {
    aspectRatio: 2,
  };

  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DonutChart;
