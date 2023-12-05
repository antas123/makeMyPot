import React from "react";
import SceneHeader from "../../../components/scene/SceneHeader";
import MainContentWrapper from "../../../components/wrappers/MainContentWrapper";
import FooterContentWrapper from "../../../components/wrappers/FooterContentWrapper";
import ThoughtBox from "../ThoughtBox";
import BasicSelect from "../BasicSelect";
import TableComponent from "./TableComponent";
import SidepieChart from "./SidepieChart";
import Barchart from "./Barchart";
import { FinancialDashboardTitles } from "../../../constants/PlaceholderData";
import { Typography } from "@mui/material";

const ManageLoans = () => {
  return (
    <>
      <SceneHeader title={FinancialDashboardTitles.manageYourLoans} />

      <MainContentWrapper thoughtCount={1} component="main">
        <div>
          <BasicSelect
            width={"60%"}
            text={"Select the loan to evaluate"}
            style={{ backgroundColor: "white" }}
          />

          <div
            style={{
              padding: "10px",
              display: "flex",
              flexDirection: "row",
              height: "90%",
            }}
          >
            <div style={{ flex: "2", marginRight: "40px" }}>
              <TableComponent
                heading={
                  "Prepay partial amount to reduce interest paid and loan term"
                }
                gap={10}
                symbol={["Rs", "Rs"]}
              />
              <TableComponent
                heading={
                  "Choose step-up EMI, where you increase EMI amount every year"
                }
                gap={10}
                or={"or"}
                symbol={["Rs", "%"]}
              />
              <TableComponent
                heading={"Swich to loan with lesser interest rate"}
                gap={10}
                symbol={["Rs", "%"]}
              />
            </div>
            <div
              style={{
                flex: "1",
                backgroundColor: "#f5f7f8",
                textAlign: "center",
              }}
            >
              <h3>Break up of total payment</h3>
              <SidepieChart />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                border: "1px solid black",
                padding: "5px",
                width: "78%",
              }}
            >
              <Barchart />
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  borderBottom: "1px dashed grey",
                  width: "100%",
                  height: "33%",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontWeight: "400", color: "grey" }}>
                  Loan EMI
                </Typography>
                <Typography sx={{ fontSize: "28px", fontWeight: "bolder" }}>
                  Rs 55,333
                </Typography>
              </div>
              <div
                style={{
                  borderBottom: "1px dashed grey",
                  width: "100%",
                  height: "33%",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontWeight: "400", color: "grey" }}>
                  Total interest payable
                </Typography>
                <Typography sx={{ fontSize: "28px", fontWeight: "bolder" }}>
                  Rs 55,333
                </Typography>
              </div>
              <div
                style={{
                  borderBottom: "1px dashed grey",
                  width: "100%",
                  height: "33%",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontWeight: "400", color: "grey" }}>
                  Total payment <br /> (Principal + Interest)
                </Typography>
                <Typography sx={{ fontSize: "28px", fontWeight: "bolder" }}>
                  Rs 55,333
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </MainContentWrapper>

      <FooterContentWrapper thoughtCount={1} component="footer">
        <ThoughtBox />
      </FooterContentWrapper>
    </>
  );
};

export default ManageLoans;
