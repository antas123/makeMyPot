import React from "react";
import BasicSelect from "../BasicSelect";
import InputtableComponent from "../../../components/InputtableComponent";
import { Input } from "@mui/material";

const FormBox = ({
  changeAppUserData,
  goalPlanningDetails,
  addGoalHandler,
}) => {
  return (
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
              onChange={(e) =>
                changeAppUserData(
                  "goalPlanningDetails",
                  "goalName",
                  e.target.value
                )
              }
              value={goalPlanningDetails?.goalName || ""}
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
                changeAppData={(val) =>
                  changeAppUserData("goalPlanningDetails", "targetYear", val)
                }
                value={goalPlanningDetails?.targetYear || ""}
              />
            </div>
            <div style={{ width: "50%" }}>
              <InputtableComponent
                text={"Current cost for the goal"}
                symbol={"Rs"}
                width={"100%"}
                changeAppData={(val) =>
                  changeAppUserData(
                    "goalPlanningDetails",
                    "currentCostForGoal",
                    val
                  )
                }
                value={goalPlanningDetails?.currentCostForGoal || ""}
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
            <BasicSelect
              width={"100%"}
              text={"select goal type"}
              changeAppData={(val) =>
                changeAppUserData("goalPlanningDetails", "goalType", val)
              }
              data={["Can't say", "Achievable", "Challenging"]}
              value={goalPlanningDetails?.goalType || ""}
            />
          </div>

          <div>
            <InputtableComponent
              text={"Inflation adjusted cost"}
              symbol={"Rs"}
              width={"100%"}
              changeAppData={(val) =>
                changeAppUserData(
                  "goalPlanningDetails",
                  "inflationAdjCost",
                  val
                )
              }
              value={goalPlanningDetails?.inflationAdjCost || ""}
            />
          </div>

          <div>
            <InputtableComponent
              text={"Current cost for the goal"}
              symbol={"Rs"}
              width={"100%"}
              changeAppData={(val) =>
                changeAppUserData(
                  "goalPlanningDetails",
                  "financialAssetCurrentCost",
                  val
                )
              }
              value={goalPlanningDetails?.financialAssetCurrentCost || ""}
            />
          </div>

          <div>
            <InputtableComponent
              text={"Current cost for the goal"}
              symbol={"Rs"}
              width={"100%"}
              changeAppData={(val) =>
                changeAppUserData(
                  "goalPlanningDetails",
                  "fixedAssetCurrentCost",
                  val
                )
              }
              value={goalPlanningDetails?.fixedAssetCurrentCost || ""}
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
        <button
          style={{
            width: "100%",
            border: "1px solid grey",
            color: "grey",
            height: "38px",
            cursor: "disabled",
          }}
          onClick={addGoalHandler}
        >
          <p style={{ fontSize: "20px", margin: "0px" }}>
            CREATE YOUR FINANCIAL GOAL
          </p>
        </button>
      </div>
    </div>
  );
};

export default FormBox;
