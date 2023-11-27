import React from "react";
import MainContentWrapper from "../../../components/wrappers/MainContentWrapper";
import FooterContentWrapper from "../../../components/wrappers/FooterContentWrapper";
import ThoughtBox from "../ThoughtBox";
import SceneHeader from "../../../components/scene/SceneHeader";
import SceneFooter from "../../../components/scene/SceneFooter";
import { Grid, Typography } from "@mui/material";
import AmountTable from "../../../components/AmountTable";
import StatCard from "../../../components/extras/StatCard/StatCard";
import MonetizationOnTwoTone from "@mui/icons-material/MonetizationOnTwoTone";

const IncomeAndExpensesReport = () => {
  return (
    <>
      <SceneHeader />
      <MainContentWrapper isDashboard>
        <Typography>
          <Grid container sx={{ height: "100%" }}>
            <Grid item md={4}>
              <StatCard
                title="Total Income"
                IconComponent={
                  <MonetizationOnTwoTone sx={{ fontSize: "68px" }} />
                }
                extraInfo={"ss"}
                data="1.32 Cr"
                content="content is the gsv"
              />
            </Grid>
            <Grid item md={4}>
              <StatCard
                title="1"
                IconComponent={
                  <MonetizationOnTwoTone sx={{ fontSize: "70px" }} />
                }
                data="1.32 Cr"
                content="contentis sthe  gsv"
              />
            </Grid>
            <Grid item md={4}>
              <StatCard
                title="1"
                IconComponent={
                  <MonetizationOnTwoTone sx={{ fontSize: "70px" }} />
                }
                data="1.32 Cr"
                content="contentis sthe  gsv"
              />
            </Grid>
          </Grid>
          <Grid container sx={{ height: "100%" }}>
            <Grid item md={4}>
              <StatCard
                title="1"
                IconComponent={
                  <MonetizationOnTwoTone sx={{ fontSize: "70px" }} />
                }
                data="1.32 Cr"
                content="contentis sthe  gsv"
              />
            </Grid>
            <Grid item md={4}>
              <StatCard />
            </Grid>
            <Grid item md={4}>
              <StatCard />
            </Grid>
          </Grid>
          <Grid container sx={{ height: "100%" }}>
            <Grid item md={4}>
              <StatCard />
            </Grid>
            <Grid item md={4}>
              <StatCard />
            </Grid>
            <Grid item md={4}>
              <StatCard />
            </Grid>
          </Grid>
        </Typography>
      </MainContentWrapper>
      <FooterContentWrapper>
        <ThoughtBox />
      </FooterContentWrapper>
    </>
  );
};

export default IncomeAndExpensesReport;
