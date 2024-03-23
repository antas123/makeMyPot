import React from "react";
import MainContentWrapper from "../../../components/wrappers/MainContentWrapper";
import FooterContentWrapper from "../../../components/wrappers/FooterContentWrapper";
import ThoughtBox from "../ThoughtBox";
import SceneHeader from "../../../components/scene/SceneHeader";
import { Grid, Typography } from "@mui/material";
import StatCard from "../../../components/extras/StatCard/StatCard";
import RatioCard from "../../../components/extras/RatioCard/RatioCard";
import MoneyBoxImage from "../../../assets/moneyBox.png";
import AboutImage from "../../../assets/about.png";
import MoneyBagRupeeImage from "../../../assets/moneyBagRupee.png";
import InlandImage from "../../../assets/inland.png";
import CoinsImage from "../../../assets/coins.png";
import CashImage from "../../../assets/cash.png";
import SirenImage from "../../../assets/siren.png";
import HeavyImage from "../../../assets/heavy.png";
import PieChartWithCenterLabel from "../../../components/PieChartHollow";
import { FinancialDashboardTitles } from "../../../constants/PlaceholderData";
import {
  calculateAnnualExpense,
  calculateDebtToNetWorthRatio,
  calculateEmergencyFunds,
  calculateFinancialAssetRatio,
  calculateMonthlyDebt,
  calculateTotalAsset,
  calculateTotalIncome,
  calculateTotalLiabilities,
} from "../../../utils/Calculations";
import { formatAmount } from "../../../utils/helpers";

const NetWorthAnalysisReport = ({ appData, internalAppData, apiData }) => {
  const { income, expense, fixedAsset, liabilities, financialAsset } = appData;
  const annualExpense = calculateAnnualExpense(expense || {});
  const annualIncome = calculateTotalIncome(income || {});
  const totalFixedAssets = calculateTotalAsset(fixedAsset);
  const totalFinancialAssets = calculateTotalAsset(financialAsset);
  const totalLiabilities = calculateTotalLiabilities(liabilities);
  const netWorth = totalFinancialAssets + totalFixedAssets - totalLiabilities;
  const debtToNetWorthRatio = calculateDebtToNetWorthRatio(
    totalLiabilities,
    netWorth
  );
  const emergencyFund = calculateEmergencyFunds(annualExpense);
  const financialAssetRatio = calculateFinancialAssetRatio(
    totalFinancialAssets,
    totalFixedAssets
  );

  const desiredSalaryRange = apiData?.filter(
    (d) => d.min <= annualIncome && (d.max ?? Infinity) >= annualIncome
  );
  const thoughts = [
    desiredSalaryRange[0]?.summary,
    desiredSalaryRange[0]?.comment,
  ];

  return (
    <>
      <SceneHeader title={FinancialDashboardTitles.netWorthAnalysisReport} />
      <MainContentWrapper thoughtCount={2} component="main">
        <Typography>
          <Grid container sx={{ height: "100%" }}>
            <Grid item md={4}>
              <StatCard
                title="Net-Worth"
                IconComponent={MoneyBagRupeeImage}
                data={formatAmount(netWorth)}
                content="Difference of what you own and what you owe"
                color="green"
              />
            </Grid>
            <Grid item md={4}>
              <StatCard
                title="Total assets"
                IconComponent={InlandImage}
                IconComponent2={CoinsImage}
                data={formatAmount(totalFinancialAssets + totalFixedAssets)}
                content="Total expenses computed per year"
                color="gold"
              />
            </Grid>
            <Grid item md={4}>
              <StatCard
                title="Total liabilities"
                IconComponent={HeavyImage}
                data={formatAmount(totalLiabilities)}
                content="Total commitments require payment"
                color="orange"
              />
            </Grid>
          </Grid>
          <Grid container sx={{ height: "100%" }}>
            <Grid item md={4}>
              <RatioCard
                title="Financial assets ratio"
                IconComponent={AboutImage}
                content="% of assets can be easily converted to cash"
                pp={financialAssetRatio}
              />
            </Grid>
            <Grid item md={4}>
              <StatCard
                title="Financial Assets"
                IconComponent={CashImage}
                data={formatAmount(totalFinancialAssets)}
                color="gray"
                content="Total assets can be easily converted to cash"
              />
            </Grid>
            <Grid item md={4}>
              <StatCard
                title="Fixed Assets"
                IconComponent={InlandImage}
                data={formatAmount(totalFixedAssets)}
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
                data={formatAmount(emergencyFund)}
                color="green"
                content="Indicator for handling financial emergencies"
                extraInfo="~ 3.5 times"
              />
            </Grid>
            <Grid item md={4}>
              <RatioCard
                title="Debt to net worth ratio"
                IconComponent={AboutImage}
                content="Level of debt relative to net worth"
                pp={debtToNetWorthRatio}
              />
            </Grid>
            <Grid item md={4}>
              <PieChartWithCenterLabel />
            </Grid>
          </Grid>
        </Typography>
      </MainContentWrapper>
      <FooterContentWrapper thoughtCount={2} component="footer">
        {thoughts?.map((thought) => (
          <ThoughtBox
            text={thought?.replace("{{totalIncome}}", `Rs ${annualIncome}`)}
          />
        ))}
      </FooterContentWrapper>
    </>
  );
};

export default NetWorthAnalysisReport;
