import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

const data = [
  { value: 5, label: "Apparels" },
  { value: 10, label: "Electronics" },
  { value: 15, label: "Household" },
  { value: 20, label: "D" },
];

const size = {
  width: 350,
  height: 200,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: "purple",
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 12,
  fontWeight: "bold",
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  const [line1, ignore, line2] = children;

  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      <tspan x={left + width / 2} dy={-5}>
        {line1}
      </tspan>
      <tspan x={left + width / 2} dy={15}>
        {line2}
      </tspan>
    </StyledText>
  );
}

export default function PieChartWithCenterLabel() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        height: "170px",
        padding: "10px",
        margin: "10px",
        marginTop: "15px",
        padding: "3px",
        paddingLeft: "90px",
      }}
    >
      <PieChart
        series={[{ data, innerRadius: 60 }]}
        slotProps={{ legend: { hidden: true } }}
        {...size}
      >
        <PieCenterLabel>Total revenue: {"\n"} $64.08K</PieCenterLabel>
      </PieChart>
    </div>
  );
}
