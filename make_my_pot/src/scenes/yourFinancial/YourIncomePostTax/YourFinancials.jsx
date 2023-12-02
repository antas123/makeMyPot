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

const YourFinancials = ({ data, changeTotalIncome }) => {
  const [baseSalary, setBaseSalary] = useState("");
  const [annualBonus, setAnnualBonus] = useState("");
  const [otherSourceIncome, setOtherSourceIncome] = useState("");
  const [summary, setSummary] = useState("Initial summary");
  const [comment, setComment] = useState("Initial comment");

  const { yourIncomePostTax } = PlaceholderData;

  const sum =
    12 * (Number(baseSalary) + Number(otherSourceIncome)) + Number(annualBonus);

  useEffect(() => {
    changeTotalIncome(sum);
    const desiredSalaryRange = data?.filter(
      (d) => d.min <= sum && (d.max ?? Infinity) >= sum
    );
    setComment(desiredSalaryRange[0]?.comment);
    setSummary(desiredSalaryRange[0]?.summary);
  }, [baseSalary, otherSourceIncome, annualBonus]);

  return (
    <>
      <SceneHeader title={yourIncomePostTax.accordionTitle} />
      <MainContentWrapper>
        <ControlledAccordions
          title="Family take home salary / month"
          subtitle={[...yourIncomePostTax.tabs.baseSalary]}
          icon={CashInHand}
          value={baseSalary}
          changeValue={(val) => setBaseSalary(val)}
        />
        <ControlledAccordions
          title="Annual bonus / year"
          subtitle={[...yourIncomePostTax.tabs.annualBonus]}
          icon={MoneyBagRupeeOrange}
          value={annualBonus}
          changeValue={(val) => setAnnualBonus(val)}
        />
        <ControlledAccordions
          title="Other sources of income Eg: Rentals, Dividents per month"
          subtitle={[...yourIncomePostTax.tabs.otherSourceIncome]}
          icon={ManWithMoney}
          value={otherSourceIncome}
          changeValue={(val) => setOtherSourceIncome(val)}
        />
      </MainContentWrapper>

      <FooterContentWrapper>
        <ThoughtBox text={summary?.replace("{{totalIncome}}", sum)} />
        <ThoughtBox text={comment} />
      </FooterContentWrapper>
      <SceneFooter />
    </>
  );
};

export default YourFinancials;
