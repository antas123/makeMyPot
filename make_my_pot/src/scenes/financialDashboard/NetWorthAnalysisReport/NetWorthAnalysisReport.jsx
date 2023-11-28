import React from "react";
import MainContentWrapper from "../../../components/wrappers/MainContentWrapper";
import FooterContentWrapper from "../../../components/wrappers/FooterContentWrapper";
import ThoughtBox from "../ThoughtBox";
import SceneHeader from "../../../components/scene/SceneHeader";
import { Grid, Typography } from "@mui/material";
import StatCard from "../../../components/extras/StatCard/StatCard";
import RatioCard from "../../../components/extras/RatioCard/RatioCard";
import SplitMoneyIcon from "../../../assets/splitMoney.png";
import MoneyBoxImage from "../../../assets/moneyBox.png";
import AboutImage from "../../../assets/about.png";
import MoneyBagRupeeImage from "../../../assets/moneyBagRupee.png";
import InlandImage from "../../../assets/inland.png";
import CoinsImage from "../../../assets/coins.png";
import CashImage from "../../../assets/cash.png";
import SirenImage from "../../../assets/siren.png";
import PieChartWithCenterLabel from "../../../components/PieChartHollow";

const NetWorthAnalysisReport = () => {
  return (
    <>
      <SceneHeader />
      <MainContentWrapper isDashboard>
        <Typography>
          <Grid container sx={{ height: "100%" }}>
            <Grid item md={4}>
              <StatCard
                title="Net-Worth"
                IconComponent={MoneyBagRupeeImage}
                data="1.32 Cr"
                content="Difference of what you own and what you owe"
                color="green"
              />
            </Grid>
            <Grid item md={4}>
              <StatCard
                title="Total assets"
                IconComponent={InlandImage}
                IconComponent2={CoinsImage}
                data="18.34 L"
                content="Total expenses computed per year"
                color="gold"
              />
            </Grid>
            <Grid item md={4}>
              <StatCard
                title="Total savings"
                IconComponent={MoneyBoxImage}
                data="1.32 Cr"
                content="Your in-hand savings per year"
                color="green"
              />
            </Grid>
          </Grid>
          <Grid container sx={{ height: "100%" }}>
            <Grid item md={4}>
              <RatioCard
                title="Financial assets ratio"
                IconComponent={AboutImage}
                content="% of assets can be easily converted to cash"
                pp={39}
              />
            </Grid>
            <Grid item md={4}>
              <StatCard
                title="Financial Assets"
                IconComponent={CashImage}
                data="34.25 L"
                color="gray"
                content="Total assets can be easily converted to cash"
              />
            </Grid>
            <Grid item md={4}>
              <StatCard
                title="Fixed Assets"
                IconComponent={InlandImage}
                data="87.64 L"
                color="gray"
                content="Total assets can be easily converted to cash"
              />
            </Grid>
          </Grid>
          <Grid container sx={{ height: "100%" }}>
            <Grid item md={4}>
              <StatCard
                title="Emergency funds"
                IconComponent={SirenImage}
                data="2.15 L"
                color="green"
                content="Indicator for handling financial emergencies"
              />
            </Grid>
            <Grid item md={4}>
              <RatioCard
                title="Debt to net worth ratio"
                IconComponent={AboutImage}
                content="Level of debt relative to net worth"
                pp={78}
              />
            </Grid>
            <Grid item md={4}>
              <PieChartWithCenterLabel />
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

export default NetWorthAnalysisReport;
