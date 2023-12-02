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
import PieChartWithCenterLabel from "../../../components/PieChartHollow";
import TableCard from "../../../components/extras/TableCard/TableCard";
import { FinancialDashboardTitles } from "../../../constants/PlaceholderData";

const IncomeAndExpensesReport = () => {
  return (
    <>
      <SceneHeader title={FinancialDashboardTitles.incomeAndExpensesReport} />
      <MainContentWrapper thoughtCount={1} component="main">
        <Typography>
          <Grid container sx={{ height: "100%" }}>
            <Grid item md={4}>
              <StatCard
                title="Total Income"
                IconComponent={SplitMoneyIcon}
                data="1.32 Cr"
                content="Your income post tax per year"
                color="green"
              />
            </Grid>
            <Grid item md={4}>
              <StatCard
                title="Total expenses"
                IconComponent={SplitMoneyIcon}
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
                title="Essential expenses ratio"
                IconComponent={AboutImage}
                content="Portion of income going for essentials"
                pp={98}
              />
            </Grid>
            <Grid item md={4}>
              <TableCard
                title="Income sources"
                data={[
                  {
                    title: "Take Home Salary",
                    value: 289999,
                  },
                  {
                    title: "Annual Bonus",
                    value: 289999,
                  },
                  {
                    title: "Rental Income",
                    value: 289999,
                  },
                  {
                    title: "Income from dividents",
                    value: 289999,
                  },
                  {
                    title: "Income from ...",
                    value: 289999,
                  },
                  {
                    title: "Income from ...",
                    value: 289999,
                  },
                ]}
              />
            </Grid>
            <Grid item md={4}>
              <RatioCard
                title="Savings Ratio"
                IconComponent={AboutImage}
                content="Indicator to build wealth and save future"
                pp={20}
              />
            </Grid>
          </Grid>
          <Grid container sx={{ height: "100%" }}>
            <Grid item md={4}>
              <RatioCard
                title="Debt to Income Ratio"
                IconComponent={AboutImage}
                content="Indicator to build wealth and save future"
                pp={40}
              />
            </Grid>
            <Grid item md={4}>
              <TableCard
                title="Expenses"
                data={[
                  {
                    title: "Household expenses",
                    value: 2999,
                  },
                  {
                    title: "Lifestyle expenses",
                    value: 28909,
                  },
                  {
                    title: "Dependant expenses",
                    value: 899,
                  },
                  {
                    title: "Insurance expenses",
                    value: 28969,
                  },
                  {
                    title: "Other expenses",
                    value: 28999,
                  },
                ]}
              />
            </Grid>
            <Grid item md={4}>
              <PieChartWithCenterLabel />
            </Grid>
          </Grid>
        </Typography>
      </MainContentWrapper>
      <FooterContentWrapper thoughtCount={1} component="footer">
        <ThoughtBox />
      </FooterContentWrapper>
    </>
  );
};

export default IncomeAndExpensesReport;
