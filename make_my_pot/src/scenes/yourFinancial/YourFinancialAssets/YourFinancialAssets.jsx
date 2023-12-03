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

const YourFinancialAssets = ({
  data,
  financialAssetDetails,
  changeAppUserData,
}) => {
  const {
    accBalanceAndLiquidFunds,
    fdAndBonds,
    equityMFStocks,
    epf,
    LICAndUlipPlans,
    nationalPension,
  } = financialAssetDetails;

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
      <MainContentWrapper thoughtCount={2} component="main">
        <ControlledAccordions
          title="Account balance / Liquid funds"
          subtitle={[...yourFinancialAssets.tabs.accBalanceAndLiquidFunds]}
          icon={CashInHand}
          value={accBalanceAndLiquidFunds}
          changeValue={(val) =>
            changeAppUserData("financialAsset", "accBalanceAndLiquidFunds", val)
          }
        />
        <ControlledAccordions
          title="Fixed deposits and bonds"
          subtitle={[...yourFinancialAssets.tabs.fdAndBonds]}
          icon={MoneyBagRupeeOrange}
          value={fdAndBonds}
          changeValue={(val) =>
            changeAppUserData("financialAsset", "fdAndBonds", val)
          }
          inputCount={3}
        />
        <ControlledAccordions
          title="Employee provident fund"
          subtitle={[...yourFinancialAssets.tabs.epf]}
          icon={ManWithMoney}
          value={epf}
          changeValue={(val) => changeAppUserData("financialAsset", "epf", val)}
        />
        <ControlledAccordions
          title="Real estate (Home/Land/Shop) - For investment purpose"
          subtitle={[...yourFinancialAssets.tabs.equityMFStocks]}
          icon={MoneyBagRupeeOrange}
          value={equityMFStocks}
          changeValue={(val) =>
            changeAppUserData("financialAsset", "equityMFStocks", val)
          }
        />
        {/* Third ControlledAccordion */}
        <ControlledAccordions
          title="LIC & ULIP Plans"
          subtitle={[...yourFinancialAssets.tabs.LICAndUlipPlans]}
          icon={ManWithMoney}
          value={LICAndUlipPlans}
          changeValue={(val) =>
            changeAppUserData("financialAsset", "LICAndUlipPlans", val)
          }
        />
        <ControlledAccordions
          title="National pension scheme"
          subtitle={[...yourFinancialAssets.tabs.nationalPension]}
          icon={ManWithMoney}
          value={nationalPension}
          changeValue={(val) =>
            changeAppUserData("financialAsset", "nationalPension", val)
          }
        />
      </MainContentWrapper>

      <FooterContentWrapper thoughtCount={2} component="footer">
        <ThoughtBox text={summary?.replace("{{totalIncome}}", "")} />
        <ThoughtBox text={summary?.replace("{{totalIncome}}", "")} />
      </FooterContentWrapper>
      <SceneFooter />
    </>
  );
};

export default YourFinancialAssets;
