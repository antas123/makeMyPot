import React, { useEffect, useState } from "react";
import SceneHeader from "../../components/scene/SceneHeader";
import ControlledAccordions from "../../components/Accordion";
import ThoughtBox from "../financialDashboard/ThoughtBox";
import MainContentWrapper from "../../components/wrappers/MainContentWrapper";
import FooterContentWrapper from "../../components/wrappers/FooterContentWrapper";
import SceneFooter from "../../components/scene/SceneFooter";
import ManWithMoney from "../../assets/manWithMoney.png";
import CashInHand from "../../assets/CashInHand.png";
import MoneyBagRupeeOrange from "../../assets/moneyBagRupeeOrange.png";

const YourFinancials = ({ data }) => {
  const [baseSalary, setBaseSalary] = useState("");
  const [annualBonus, setAnnualBonus] = useState("");
  const [otherSourceIncome, setOtherSourceIncome] = useState("");
  const [summary, setSummary] = useState("Initial summary");
  const [comment, setComment] = useState("Initial comment");

  console.log(data);

  useEffect(() => {
    const sum =
      12 * (Number(baseSalary) + Number(otherSourceIncome)) +
      Number(annualBonus);
    const desiredSalaryRange = data.filter(
      (d) => d.min <= sum && (d.max || Infinity) >= sum
    );
    setComment(desiredSalaryRange[0].comment);
    setSummary(desiredSalaryRange[0].summary);
  }, [baseSalary, otherSourceIncome, annualBonus]);

  return (
    <>
      <SceneHeader />
      <MainContentWrapper>
        <ControlledAccordions
          title="Family take home salary / month"
          subtitle="(Optional) Family member name"
          icon={CashInHand}
          value={baseSalary}
          changeValue={(val) => setBaseSalary(val)}
        />
        <ControlledAccordions
          title="Annual bonus / year"
          subtitle="(Optional) Family member name"
          icon={MoneyBagRupeeOrange}
          value={annualBonus}
          changeValue={(val) => setAnnualBonus(val)}
        />
        <ControlledAccordions
          title="Other sources of income Eg: Rentals, Dividents per month"
          subtitle="(Optional) Source reference"
          icon={ManWithMoney}
          value={otherSourceIncome}
          changeValue={(val) => setOtherSourceIncome(val)}
        />
      </MainContentWrapper>

      <FooterContentWrapper>
        <ThoughtBox text={comment} />
        <ThoughtBox text={summary} />
      </FooterContentWrapper>
      <SceneFooter />
    </>
  );
};

export default YourFinancials;
