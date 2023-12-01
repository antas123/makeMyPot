import React, { useEffect, useState } from "react";
import SceneHeader from "../../../components/scene/SceneHeader";
import ControlledAccordions from "../../../components/Accordion";
import ThoughtBox from "../../financialDashboard/ThoughtBox";
import MainContentWrapper from "../../../components/wrappers/MainContentWrapper";
import FooterContentWrapper from "../../../components/wrappers/FooterContentWrapper";
import SceneFooter from "../../../components/scene/SceneFooter";
import CashInHand from "../../../assets/CashInHand.png";
import HeavyImage from "../../../assets/heavy.png";
import HolidayImage from "../../../assets/holiday.png";
import { PlaceholderData } from "../../../constants/PlaceholderData";

const YourExpenses = ({ data, annualIncome }) => {
  const [essentialExpenses, setEssentialExpenses] = useState("");
  const [lifestyleExpenses, setLifestyleExpenses] = useState("");
  const [loanEMI, setLoanEMI] = useState("");
  const [summary, setSummary] = useState("Initial summary");

  const { yourExpenses } = PlaceholderData;

  const totalAnnualExpense =
    12 *
    (Number(essentialExpenses) + Number(lifestyleExpenses) + Number(loanEMI));
  const annualSavings = annualIncome - totalAnnualExpense;
  const expenseRatio = (annualSavings * 100) / annualIncome;

  console.log("data", data, expenseRatio);

  useEffect(() => {
    if (expenseRatio < 0) {
      setSummary(data[0].summary);
      return;
    }
    const desiredExpensesRatioRange = data?.filter(
      (d) => d.min <= expenseRatio && (d.max ?? 100) >= expenseRatio
    );
    setSummary(desiredExpensesRatioRange[0]?.summary);
  }, [essentialExpenses, lifestyleExpenses, loanEMI]);

  return (
    <>
      <SceneHeader title={yourExpenses.accordionTitle} />
      <MainContentWrapper>
        <ControlledAccordions
          title="Essential expenses / month"
          subtitle={[...yourExpenses.tabs.essentialExpenses]}
          icon={CashInHand}
          value={essentialExpenses}
          changeValue={(val) => setEssentialExpenses(val)}
        />
        <ControlledAccordions
          title="Lifestyle Expenses / month"
          subtitle={[...yourExpenses.tabs.lifestyleExpenses]}
          icon={HolidayImage}
          value={lifestyleExpenses}
          changeValue={(val) => setLifestyleExpenses(val)}
        />
        <ControlledAccordions
          title="Loan EMIs / month"
          subtitle={[...yourExpenses.tabs.loanEMI]}
          icon={HeavyImage}
          value={loanEMI}
          changeValue={(val) => setLoanEMI(val)}
        />
      </MainContentWrapper>

      <FooterContentWrapper>
        <ThoughtBox
          text={summary?.replace(
            "{{essentialExpenseRatio}}",
            expenseRatio.toFixed(2)
          )}
        />
      </FooterContentWrapper>
      <SceneFooter />
    </>
  );
};

export default YourExpenses;
