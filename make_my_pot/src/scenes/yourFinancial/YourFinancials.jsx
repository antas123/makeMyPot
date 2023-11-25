import React from "react";
import SceneHeader from "../../components/scene/SceneHeader";
import ControlledAccordions from "../../components/Accordion";

const YourFinancials = () => {
  return (
    <>
      <SceneHeader />
      <div
        style={{
          backgroundColor: "#EEEEEE",
          height: "400px",
          overflow: "auto",
        }}
      >
        <ControlledAccordions />
        <ControlledAccordions />
        <ControlledAccordions />
        <ControlledAccordions />
        <ControlledAccordions />
      </div>
    </>
  );
};

export default YourFinancials;
