import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { moneyData } from "./DataForChart";
import { Chart as ChartJS } from "chart.js/auto";
import styles from "./dashboard.module.css";
import ThoughtBox from "./ThoughtBox";

const FinancialDashboard = () => {
  const [lineData, setLineData] = useState({
    labels: moneyData.map((item) => item.year),
    datasets: [
      {
        backgroundColor: '#99B080',
        borderColor: '#F9B572',
        data: moneyData.map((item) => item.money),
        borderSkipped: 'start', 
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
    <div className={styles.lineChart}>
      <div className={styles.lineChartBox}>
        <Line data={lineData} options={options} />
      </div>
      <ThoughtBox/>
    </div>
  );
};

export default FinancialDashboard;
