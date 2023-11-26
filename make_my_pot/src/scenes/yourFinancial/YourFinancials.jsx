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
          height: "350px",
          backgroundColor: "#F5F7F8",
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
