import React from "react";
import MainContentWrapper from "../../../components/wrappers/MainContentWrapper";
import SceneHeader from "../../../components/scene/SceneHeader";
import { Grid, Typography } from "@mui/material";
import { FinancialDashboardTitles } from "../../../constants/PlaceholderData";
import TextCell from "../../../components/TextCell";
import BasicSelect from "../BasicSelect";
import AmountTable from "../../../components/AmountTable";

const EvaluateAndPlanGoals = () => {
  return (
    <>
      <SceneHeader title={FinancialDashboardTitles.evaluateAndPlanGoals} />
      <MainContentWrapper thoughtCount={0} component="main">
        <Typography>
          <Grid container sx={{ height: "100%" }}>
            <div
              style={{
                display: "flex",
                height: "50px",
                alignItems: "center",
                margin: "5px 20px",
                width: "100%",
              }}
            >
              <TextCell text={"abhsb"} flex="2" />
              <BasicSelect
                text={"Select the loan to evaluate"}
                width="100%"
                style={{ flex: 1 }}
              />
            </div>
          </Grid>
          <Grid container sx={{ height: "100%" }}>
            <div
              style={{
                display: "flex",
                height: "50px",
                alignItems: "center",
                margin: "5px 20px",
                width: "calc(66.6% + 10px)",
              }}
            >
              <TextCell text={"abhsb"} flex="2" />
              <AmountTable text="Current cost for the goal" />
            </div>
          </Grid>
          <Grid container sx={{ height: "100%" }}>
            <div
              style={{
                display: "flex",
                height: "50px",
                alignItems: "center",
                margin: "5px 20px",
                width: "100%",
              }}
            >
              <TextCell text={"abhsb"} />
              <BasicSelect text={"Select the loan to evaluate"} width="100%" />
            </div>
          </Grid>
        </Typography>
      </MainContentWrapper>
    </>
  );
};

export default EvaluateAndPlanGoals;
