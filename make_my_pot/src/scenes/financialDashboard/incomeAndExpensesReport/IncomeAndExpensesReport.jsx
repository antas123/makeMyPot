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
import {
  calculateAnnualDebt,
  calculateAnnualExpense,
  calculateDTIRatio,
  calculateEssentialExpenseRatio,
  calculateSavingsRatio,
  calculateTotalIncome,
} from "../../../utils/Calculations";
import { formatAmount } from "../../../utils/helpers";

const IncomeAndExpensesReport = ({ appData }) => {
  const { income, expense, liabilities } = appData;
  console.log(appData);
  const annualIncome = calculateTotalIncome(income || {});
  const annualExpense = calculateAnnualExpense(expense || {});
  const annualSavings = annualIncome - annualExpense;
  const essentialExpenseRatio = calculateEssentialExpenseRatio(
    expense?.essentialExpenses,
    annualIncome
  );
  const savingsRatio = calculateSavingsRatio(annualSavings, annualIncome);
  const annualDebt = calculateAnnualDebt(liabilities ?? {});
  const DTIRatio = calculateDTIRatio(annualIncome, annualDebt);
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
                data={formatAmount(annualIncome)}
                content="Your income post tax per year"
                color="green"
              />
            </Grid>
            <Grid item md={4}>
              <StatCard
                title="Total expenses"
                IconComponent={SplitMoneyIcon}
                data={formatAmount(annualExpense)}
                content="Total expenses computed per year"
                color="gold"
              />
            </Grid>
            <Grid item md={4}>
              <StatCard
                title="Total savings"
                IconComponent={MoneyBoxImage}
                data={formatAmount(annualSavings)}
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
                pp={essentialExpenseRatio}
              />
            </Grid>
            <Grid item md={4}>
              <TableCard
                title="Income sources"
                data={Object.keys(income ?? {})?.map((title) => ({
                  title,
                  value: income[title],
                }))}
              />
            </Grid>
            <Grid item md={4}>
              <RatioCard
                title="Savings Ratio"
                IconComponent={AboutImage}
                content="Indicator to build wealth and save future"
                pp={savingsRatio}
              />
            </Grid>
          </Grid>
          <Grid container sx={{ height: "100%" }}>
            <Grid item md={4}>
              <RatioCard
                title="Debt to Income Ratio"
                IconComponent={AboutImage}
                content="Indicator to build wealth and save future"
                pp={DTIRatio}
              />
            </Grid>
            <Grid item md={4}>
              <TableCard
                title="Expenses"
                data={Object.keys(expense ?? {})?.map((title) => ({
                  title,
                  value: expense[title],
                }))}
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
