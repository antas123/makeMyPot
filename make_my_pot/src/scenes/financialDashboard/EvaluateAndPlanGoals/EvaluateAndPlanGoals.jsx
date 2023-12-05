import React from "react";
import MainContentWrapper from "../../../components/wrappers/MainContentWrapper";
import SceneHeader from "../../../components/scene/SceneHeader";
import { Button, Input } from "@mui/material";
import { FinancialDashboardTitles } from "../../../constants/PlaceholderData";
import BasicSelect from "../BasicSelect";
import InputtableComponent from "../../../components/InputtableComponent";

const EvaluateAndPlanGoals = ({ width }) => {
  return (
    <>
      <SceneHeader title={FinancialDashboardTitles.evaluateAndPlanGoals} />
      <MainContentWrapper thoughtCount={0} component="main">
        <div style={{ padding: "30px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "white",
              }}
            >
              <div
                style={{
                  padding: "30px 20px 30px 30px",
                  backgroundColor: "white",
                  display: "flex",
                  flexDirection: "column",
                  gap: "5%",
                  flex: "2",
                }}
              >
                <div style={{ marginBottom: "20px" }}>
                  <Input
                    placeholder={"Goal name for reference"}
                    sx={{
                      border: "1px solid grey",
                      padding: "0 20px",
                      borderBottom: "0",
                      width: "100%",
                      textAlign: "center",
                      alignContent: "center",
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    backgroundColor: "white",
                    width: "100%",
                    gap: "20px",
                  }}
                >
                  <div style={{ width: "50%" }}>
                    <InputtableComponent
                      text={"Target Year for the goal"}
                      width={"100%"}
                    />
                  </div>
                  <div style={{ width: "50%" }}>
                    <InputtableComponent
                      text={"Current cost for the goal"}
                      symbol={"Rs"}
                      width={"100%"}
                    />
                  </div>
                </div>

                <div style={{ width: "100%" }}>
                  <p style={{ fontSize: "18px" }}>
                    Estimated Financial assets by the target year
                  </p>
                  <p style={{ fontSize: "18px" }}>
                    Estimated fixed assets for investment by the target year
                  </p>
                </div>
              </div>

              <div
                style={{
                  flex: "1",
                  width: "100%",
                  padding: "30px 30px 30px 0px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                <div style={{ width: "100%", marginBottom: "8px" }}>
                  <BasicSelect width={"100%"} text={"select goal type"} />
                </div>

                <div>
                  <InputtableComponent
                    text={"Inflation adjusted cost"}
                    symbol={"Rs"}
                    width={"100%"}
                  />
                </div>

                <div>
                  <InputtableComponent
                    // text={"Current cost for the goal"}
                    symbol={"Rs"}
                    width={"100%"}
                  />
                </div>

                <div>
                  <InputtableComponent
                    // text={"Current cost for the goal"}
                    symbol={"Rs"}
                    width={"100%"}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                padding: "0px 30px 20px 30px",
                backgroundColor: "white",
              }}
            >
              <button style={{ width: "100%", border:"1px solid grey", color:"grey" , height:"38px"}} >
               <p style={{fontSize:"20px", margin:"0px"}}>CREATE YOUR FINANCIAL GOAL</p> 
              </button>
            </div>
          </div>
        </div>
      </MainContentWrapper>
    </>
  );
};

export default EvaluateAndPlanGoals;
