import React, { useEffect, useState } from "react";
import SceneHeader from "../../../components/scene/SceneHeader";
import ControlledAccordions from "../../../components/Accordion";
import ThoughtBox from "../../financialDashboard/ThoughtBox";
import MainContentWrapper from "../../../components/wrappers/MainContentWrapper";
import FooterContentWrapper from "../../../components/wrappers/FooterContentWrapper";
import SceneFooter from "../../../components/scene/SceneFooter";
import ManWithMoney from "../../../assets/manWithMoney.png";
import CashInHand from "../../../assets/CashInHand.png";
import MoneyBagRupeeOrange from "../../../assets/moneyBagRupeeOrange.png";
import { PlaceholderData } from "../../../constants/PlaceholderData";

const YourFinancialAssets = ({ data }) => {
  const [financialAssets, setFinancialAssets] = useState({
    accBalanceAndLiquidFunds: "",
    fdAndBonds: "",
    equityMFStocks: "",
    epf: "",
    LICAndUlipPlans: "",
    nationalPension: "",
  });

  const [summary, setSummary] = useState(data[0]?.summary ?? "Initial summary");

  const { yourFinancialAssets } = PlaceholderData;

  const updateFinancialAsset = (assetKey, value) => {
    setFinancialAssets((prevAssets) => ({
      ...prevAssets,
      [assetKey]: value,
    }));
  };

  return (
    <>
      <SceneHeader title={yourFinancialAssets.accordionTitle} />
      <MainContentWrapper>
        <ControlledAccordions
          title="Account balance / Liquid funds"
          subtitle={[...yourFinancialAssets.tabs.accBalanceAndLiquidFunds]}
          icon={CashInHand}
          value={financialAssets.accBalanceAndLiquidFunds}
          changeValue={(val) =>
            updateFinancialAsset("accBalanceAndLiquidFunds", val)
          }
        />
        <ControlledAccordions
          title="Fixed deposits and bonds"
          subtitle={[...yourFinancialAssets.tabs.fdAndBonds]}
          icon={MoneyBagRupeeOrange}
          value={financialAssets.fdAndBonds}
          changeValue={(val) => updateFinancialAsset("fdAndBonds", val)}
          inputCount={3}
        />
        <ControlledAccordions
          title="Employee provident fund"
          subtitle={[...yourFinancialAssets.tabs.epf]}
          icon={ManWithMoney}
          value={financialAssets.epf}
          changeValue={(val) => updateFinancialAsset("epf", val)}
        />
        <ControlledAccordions
          title="Real estate (Home/Land/Shop) - For investment purpose"
          subtitle={[...yourFinancialAssets.tabs.equityMFStocks]}
          icon={MoneyBagRupeeOrange}
          value={financialAssets.equityMFStocks}
          changeValue={(val) => updateFinancialAsset("equityMFStocks", val)}
        />
        {/* Third ControlledAccordion */}
        <ControlledAccordions
          title="LIC & ULIP Plans"
          subtitle={[...yourFinancialAssets.tabs.LICAndUlipPlans]}
          icon={ManWithMoney}
          value={financialAssets.LICAndUlipPlans}
          changeValue={(val) => updateFinancialAsset("LICAndUlipPlans", val)}
        />
        <ControlledAccordions
          title="National pension scheme"
          subtitle={[...yourFinancialAssets.tabs.nationalPension]}
          icon={ManWithMoney}
          value={financialAssets.nationalPension}
          changeValue={(val) => updateFinancialAsset("nationalPension", val)}
        />
      </MainContentWrapper>

      <FooterContentWrapper>
        <ThoughtBox text={summary?.replace("{{totalIncome}}", "")} />
      </FooterContentWrapper>
      <SceneFooter />
    </>
  );
};

export default YourFinancialAssets;
