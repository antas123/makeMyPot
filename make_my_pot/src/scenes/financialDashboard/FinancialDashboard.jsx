import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { moneyData } from "../../constants/DataForChart";
import { Chart as ChartJS } from "chart.js/auto";
import styles from "./dashboard.module.css";
import ThoughtBox from "./ThoughtBox";
import SceneHeader from "../../components/scene/SceneHeader";
import BasicSelect from "./BasicSelect";

const FinancialDashboard = () => {
  const [lineData, setLineData] = useState({
    labels: moneyData.map((item) => item.year),
    datasets: [
      {
        backgroundColor: "#99B080",
        borderColor: "#F9B572",
        data: moneyData.map((item) => item.money),
        borderSkipped: "start",
      },
    ],
  });

  const options = {
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    elements: {
      line: {
        borderWidth: 1,
      },
      point: {
        radius: 10,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  return (
    <>
      <SceneHeader />
      <div className={styles.lineChart}>
        <div className={styles.lineChartBox}>
          <div>
            <BasicSelect />
          </div>
          <div style={{ width: "70vw", height: "70%", marginTop: "50px" }}>
            <Line data={lineData} options={options} />
          </div>
        </div>
      </div>
      <ThoughtBox />
    </>
  );
};

export default FinancialDashboard;
