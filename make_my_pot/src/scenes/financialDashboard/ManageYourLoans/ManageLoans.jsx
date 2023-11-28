import React from "react";
import SceneHeader from "../../../components/scene/SceneHeader";
import MainContentWrapper from "../../../components/wrappers/MainContentWrapper";
import FooterContentWrapper from "../../../components/wrappers/FooterContentWrapper";
import ThoughtBox from "../ThoughtBox";
import BasicSelect from "../BasicSelect";
import AmountTable from "../../../components/AmountTable";
import TableComponent from "./TableComponent";
import SidepieChart from "./SidepieChart";

const ManageLoans = () => {
  return (
    <>
      <SceneHeader />

      <MainContentWrapper>
        <div style={{ padding: "10px" }}>
          <BasicSelect width={"60%"} text={"Select the loan to evaluate"} />

          <div
            style={{
              padding: "10px",
              display: "flex",
              flexDirection: "row",
              height: "90%",
            }}
          >
            <div style={{ flex: "2", marginRight:"40px"}}>
              <TableComponent heading={"Prepay partial amount to reduce interest paid and loan term"} gap={10} />
              <TableComponent heading={"Choose step-up EMI, where you increase EMI amount every year"} gap={10} or={"or"}/>
              <TableComponent heading={"Swich to loan with lesser interest rate"} gap={10}/>
            </div>
            <div
              style={{
                flex: "1",
                backgroundColor: "#E3F4F4",
                textAlign: "center",
              }}
            >
              <h3>Break up of total payment</h3>
              <SidepieChart />
            </div>
          </div>
        </div>
      </MainContentWrapper>

      <FooterContentWrapper>
        <ThoughtBox />
      </FooterContentWrapper>
    </>
  );
};

export default ManageLoans;
