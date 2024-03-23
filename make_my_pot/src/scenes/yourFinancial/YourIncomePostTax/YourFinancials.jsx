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
import { calculateTotalIncome } from "../../../utils/Calculations";

const YourFinancials = ({ data, changeAppUserData, incomeDetails }) => {
  const { baseSalary, annualBonus, otherSourceIncome } = incomeDetails;
  const [summary, setSummary] = useState("");
  const [comment, setComment] = useState("");

  const { yourIncomePostTax } = PlaceholderData;

  const sum = calculateTotalIncome(incomeDetails);

  useEffect(() => {
    const desiredSalaryRange = data?.filter(
      (d) => d.min <= sum && (d.max ?? Infinity) >= sum
    );
    setComment(desiredSalaryRange[0]?.comment);
    setSummary(desiredSalaryRange[0]?.summary);
  }, [baseSalary, otherSourceIncome, annualBonus]);

  return (
    <>
      <SceneHeader title={yourIncomePostTax.accordionTitle} />
      <MainContentWrapper thoughtCount={2} component="main">
        <ControlledAccordions
          title="Family take home salary / month"
          subtitle={[...yourIncomePostTax.tabs.baseSalary]}
          icon={CashInHand}
          value={baseSalary}
          changeValue={(val) => changeAppUserData("income", "baseSalary", val)}
          tab="income"
          name="baseSalary"
        />
        <ControlledAccordions
          title="Annual bonus / year"
          subtitle={[...yourIncomePostTax.tabs.annualBonus]}
          icon={MoneyBagRupeeOrange}
          value={annualBonus}
          changeValue={(val) => changeAppUserData("income", "annualBonus", val)}
          tab="income"
          name="annualBonus"
        />
        <ControlledAccordions
          title="Other sources of income Eg: Rentals, Dividents per month"
          subtitle={[...yourIncomePostTax.tabs.otherSourceIncome]}
          icon={ManWithMoney}
          value={otherSourceIncome}
          changeValue={(val) =>
            changeAppUserData("income", "otherSourceIncome", val)
          }
          tab="income"
          name="annualBonus"
        />
      </MainContentWrapper>

      <FooterContentWrapper thoughtCount={2} component="footer">
        <ThoughtBox text={summary?.replace("{{totalIncome}}", sum)} />
        <ThoughtBox text={comment} />
      </FooterContentWrapper>
      <SceneFooter />
    </>
  );
};

export default YourFinancials;
