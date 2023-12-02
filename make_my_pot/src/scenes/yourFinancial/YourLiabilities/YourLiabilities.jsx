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

const YourLiabilities = ({ data }) => {
  const [personalLoansAndEMI, setPersonalLoansAndEMI] = useState("");
  const [homeLoan, setHomeLoan] = useState("");
  const [debtToOthers, setDebtToOthers] = useState("");
  const [summary, setSummary] = useState("Initial summary");

  const { yourLiabilities } = PlaceholderData;

  return (
    <>
      <SceneHeader title={yourLiabilities.accordionTitle} />
      <MainContentWrapper thoughtCount={1} component="main">
        <ControlledAccordions
          title="Family take home salary / month"
          subtitle={[...yourLiabilities.tabs.personalLoansAndEMI]}
          icon={CashInHand}
          value={personalLoansAndEMI}
          changeValue={(val) => setPersonalLoansAndEMI(val)}
        />
        <ControlledAccordions
          title="Annual bonus / year"
          subtitle={[...yourLiabilities.tabs.homeLoan]}
          icon={MoneyBagRupeeOrange}
          value={homeLoan}
          changeValue={(val) => setHomeLoan(val)}
        />
        <ControlledAccordions
          title="Other sources of income Eg: Rentals, Dividents per month"
          subtitle={[...yourLiabilities.tabs.debtToOthers]}
          icon={ManWithMoney}
          value={debtToOthers}
          changeValue={(val) => setDebtToOthers(val)}
        />
      </MainContentWrapper>

      <FooterContentWrapper thoughtCount={1} component="footer">
        <ThoughtBox text={summary?.replace("{{totalIncome}}", "")} />
      </FooterContentWrapper>
      <SceneFooter />
    </>
  );
};

export default YourLiabilities;
