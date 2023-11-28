import React from "react";
import { Doughnut } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import SceneHeader from "./scene/SceneHeader";
import MainContentWrapper from "./wrappers/MainContentWrapper";

ChartJS.register(ArcElement, Tooltip, Legend);

ChartJS.register({
  id: "examplePlugin2",
  afterDraw(chart, args, options) {
    const {
      ctx,
      config,
      data,
      chartArea: { top, bottom, left, right, width, height },
    } = chart;
    if (chart.config._config.type !== "doughnut") return;
    ctx.save();
    const dataTotal = data.datasets[0].data.reduce((a, b) => a + b, 0);
    const needleValue = data.datasets[0].needleValue;
    const angle = Math.PI + (1 / dataTotal) * needleValue * Math.PI;
    console.log(angle);

    const cx = width / 2;
    const cy = height / 2;

    ctx.translate(cx, cy + 30);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(0, -2);
    ctx.lineTo(height / 2, 0);
    ctx.lineTo(0, 2);
    ctx.fillStyle = "#444";
    ctx.fill();
    ctx.restore();
    // ctx.translate(-cx, -cy);

    ctx.beginPath();
    ctx.arc(cx, cy + 30, 5, 0, 10);
    ctx.fill();
    ctx.restore();

    ctx.font = "20px Helvetica";
    ctx.fillStyle = "#444";
    ctx.fillText(needleValue + "%", cx, cy + 50);
    ctx.textAlign = "center";
    ctx.restore();
  },
});

const DonutChart = ({ percentage }) => {
  const data = {
    labels: ["red", "yellow", "green"],
    datasets: [
      {
        label: "Shop 1",
        data: [50, 25, 25],
        needleValue: percentage,
        backgroundColor: ["red", "yellow", "green"],
        borderColor: ["black", "black", "black"],
        borderRadius: "10%",
        cutout: "50%",
        circumference: 180,
        rotation: 270,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        yAlign: "bottom",
        displayColors: false,
        callbacks: {
          label: function (tooltipItem, data, value) {
            const tracker = tooltipItem.dataset.needleValue;
            return `Tracker score: ${tracker}`;
          },
        },
      },
    },
  };

  return (
    <div style={{ width: "120px", height: "100px", marginTop: 0 }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DonutChart;
