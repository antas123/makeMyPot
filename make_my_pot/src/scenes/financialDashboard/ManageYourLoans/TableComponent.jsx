import React from "react";
import InputtableComponent from "../../../components/InputtableComponent";

const TableComponent = ({ gap, heading, or, symbol = [] }) => {
  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: "white",
        width: "100%",
        marginBottom: "10px",
      }}
    >
      <p style={{ fontSize: "18px", color: "green", marginTop: "5px" }}>
        {heading}
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: gap,
          width: "600px",
        }}
      >
        <InputtableComponent
          text={"Pre-payment amount"}
          width={250}
          symbol={symbol[0]}
        />
        {or}
        <InputtableComponent
          text={"Pre-payment penality if any"}
          width={250}
          symbol={symbol[1]}
        />
      </div>
    </div>
  );
};

export default TableComponent;
