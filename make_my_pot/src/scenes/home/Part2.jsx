import React from "react";
import wave from "../../scenes/financialDashboard/imagesDashboard/wave.png";
import dashboard from "../../scenes/financialDashboard/imagesDashboard/dashboard.png";

const Part2 = () => {
  return (
    <div style={{ width: "100vw" }}>
      <img style={{ width: "100vw" }} src={wave} alt="" />
      <img
        style={{ width: "60vw", position: "absolute", left: "20%" }}
        src={dashboard}
        alt=""
      />
    </div>
  );
};

export default Part2;
