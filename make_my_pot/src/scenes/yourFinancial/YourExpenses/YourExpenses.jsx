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
import {
  calculateExpenseRatio,
  calculateAnnualExpense,
  calculateTotalIncome,
} from "../../../utils/Calculations";

const YourExpenses = ({
  data,
  incomeDetails,
  setError,
  expenseDetails,
  changeAppUserData,
}) => {
  const [summary, setSummary] = useState("Initial summary");
  const { essentialExpenses, lifestyleExpenses, loanEMI } = expenseDetails;
  const { yourExpenses } = PlaceholderData;

  const annualIncome = calculateTotalIncome(incomeDetails);
  if (annualIncome === 0) {
    setError(
      "Income is required for calculation of Expense Ratio. Please add your income."
    );
  }

  const annualExpense = calculateAnnualExpense(expenseDetails);
  const expenseRatio = calculateExpenseRatio(annualExpense, annualIncome);

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
      <MainContentWrapper thoughtCount={1} component="main">
        <ControlledAccordions
          title="Essential expenses / month"
          subtitle={[...yourExpenses.tabs.essentialExpenses]}
          icon={CashInHand}
          value={essentialExpenses}
          changeValue={(val) =>
            changeAppUserData("expense", "essentialExpenses", val)
          }
        />
        <ControlledAccordions
          title="Lifestyle Expenses / month"
          subtitle={[...yourExpenses.tabs.lifestyleExpenses]}
          icon={HolidayImage}
          value={lifestyleExpenses}
          changeValue={(val) =>
            changeAppUserData("expense", "lifestyleExpenses", val)
          }
        />
        <ControlledAccordions
          title="Loan EMIs / month"
          subtitle={[...yourExpenses.tabs.loanEMI]}
          icon={HeavyImage}
          value={loanEMI}
          changeValue={(val) => changeAppUserData("expense", "loanEMI", val)}
        />
      </MainContentWrapper>

      <FooterContentWrapper thoughtCount={1} component="footer">
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
