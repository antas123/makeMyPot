import React from "react";
import SceneHeader from "../../components/scene/SceneHeader";
import ControlledAccordions from "../../components/Accordion";
import ThoughtBox from "../financialDashboard/ThoughtBox";

const YourFinancials = () => {
  return (
    <>
      <SceneHeader />
      <div
        style={{
          backgroundColor: "#EEEEEE",
          height: "350px",
          overflow: "auto",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <ControlledAccordions />
        <ControlledAccordions />
        <ControlledAccordions />
        <ControlledAccordions />
        <ControlledAccordions />
      </div>
      <ThoughtBox />
    </>
  );
};

export default YourFinancials;
