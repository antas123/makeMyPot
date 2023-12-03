import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { moneyData } from "../../constants/DataForChart";
import { Chart as ChartJS } from "chart.js/auto";
import styles from "./dashboard.module.css";
import ThoughtBox from "./ThoughtBox";
import SceneHeader from "../../components/scene/SceneHeader";
import BasicSelect from "./BasicSelect";
import MainContentWrapper from "../../components/wrappers/MainContentWrapper";
import FooterContentWrapper from "../../components/wrappers/FooterContentWrapper";
import ChartDataLabels from "chartjs-plugin-datalabels";
import settingicon from "./imagesDashboard/Settings.png";
import arrowRight from "./imagesDashboard/arrowl.png";
import arrowLeft from "./imagesDashboard/arrowr.png";
import Zoomin from "./imagesDashboard/zoomin.png";
import Zoomout from "./imagesDashboard/zoomout.png";
import zoomPlugin from "chartjs-plugin-zoom";
import { FinancialDashboardTitles } from "../../constants/PlaceholderData";

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

      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "xy",
        },
      },

      datalabels: {
        align: "end",
        anchor: "end",
        color: "#333",
        formatter: (value, context) => {
          return value.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ",") + " Cr";
        },
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
        offset: true,
        grid: {
          display: false,
        },
      },
      y: {
        offset: true,
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
      <SceneHeader title={FinancialDashboardTitles.finanacialDashboard} />

      <MainContentWrapper thoughtCount={1} component="main" isDashboard>
        <div className={styles.lineChartBox}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              <BasicSelect width={350} text={"Net worth over time"} />
              <BasicSelect width={250} text={"Select label to view"} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <img
                style={{ height: "28px", cursor: "pointer" }}
                src={settingicon}
                alt=""
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <img
                  style={{ height: "25px", cursor: "pointer" }}
                  src={arrowLeft}
                  alt=""
                />
                <img
                  style={{ height: "25px", cursor: "pointer" }}
                  src={Zoomin}
                  alt=""
                />
                <img
                  style={{ height: "25px", cursor: "pointer" }}
                  src={Zoomout}
                  alt=""
                />
                <img
                  style={{ height: "25px", cursor: "pointer" }}
                  src={arrowRight}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            style={{
              height: "270px",
              width: "800px",
              marginTop: "50px",
            }}
          >
            <Line
              data={lineData}
              options={options}
              plugins={[ChartDataLabels, zoomPlugin]}
            />
          </div>
        </div>
      </MainContentWrapper>

      <FooterContentWrapper thoughtCount={1} component="footer">
        <ThoughtBox />
      </FooterContentWrapper>
    </>
  );
};

export default FinancialDashboard;
