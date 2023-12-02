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

const YourFixedAssets = ({ data }) => {
  const [personalRealEstate, setPersonalRealEstate] = useState("");
  const [investmentRealEstate, setInvestmentRealEstate] = useState("");
  const [physicalGoldAndOthers, setPhysicalGoldAndOthers] = useState("");
  const [summary, setSummary] = useState(
    data[0]?.SummaryNotes ?? "Initial summary"
  );

  const { yourFixedAssets } = PlaceholderData;

  return (
    <>
      <SceneHeader title={yourFixedAssets.accordionTitle} />
      <MainContentWrapper thoughtCount={1} component="main">
        <ControlledAccordions
          title="Real estate (Home/Land) - For personal use"
          subtitle={[...yourFixedAssets.tabs.personalRealEstate]}
          icon={CashInHand}
          value={personalRealEstate}
          changeValue={(val) => setPersonalRealEstate(val)}
        />
        <ControlledAccordions
          title="Real estate (Home/Land/Shop) - For investment purpose"
          subtitle={[...yourFixedAssets.tabs.investmentRealEstate]}
          icon={MoneyBagRupeeOrange}
          value={investmentRealEstate}
          changeValue={(val) => setInvestmentRealEstate(val)}
        />
        <ControlledAccordions
          title="Physical gold and other precious metals"
          subtitle={[...yourFixedAssets.tabs.physicalGoldAndOthers]}
          icon={ManWithMoney}
          value={physicalGoldAndOthers}
          changeValue={(val) => setPhysicalGoldAndOthers(val)}
        />
      </MainContentWrapper>

      <FooterContentWrapper thoughtCount={1} component="footer">
        <ThoughtBox text={summary?.replace("{{totalIncome}}", "")} />
      </FooterContentWrapper>
      <SceneFooter />
    </>
  );
};

export default YourFixedAssets;
