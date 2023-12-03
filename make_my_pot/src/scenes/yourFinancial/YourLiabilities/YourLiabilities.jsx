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
import {
  calculateAnnualDebt,
  calculateDTIRatio,
  calculateTotalIncome,
} from "../../../utils/Calculations";

const YourLiabilities = ({
  data,
  incomeDetails,
  setError,
  changeAppUserData,
  liabilityDetails,
}) => {
  const { personalLoansAndEMI, homeLoan, debtToOthers } = liabilityDetails;
  const [summary, setSummary] = useState("Initial summary");

  const { yourLiabilities } = PlaceholderData;
  const annualIncome = calculateTotalIncome(incomeDetails);

  if (annualIncome === 0) {
    setError(
      "Income is required for calculation of Debt to Income Ratio. Please add your income."
    );
  }

  console.log(data);

  const annualDebt = calculateAnnualDebt(liabilityDetails ?? {});
  const debtToIncomeRatio = calculateDTIRatio(annualIncome, annualDebt);

  useEffect(() => {
    if (debtToIncomeRatio > 100) {
      setSummary(
        `Your debt to income ratio(${debtToIncomeRatio}%) is greater than 100%`
      );
      return;
    }
    const desiredDTIRatioRange = data?.filter(
      (d) => d.min <= debtToIncomeRatio && (d.max ?? 100) >= debtToIncomeRatio
    );
    setSummary(desiredDTIRatioRange[0]?.summary);
  }, [personalLoansAndEMI, homeLoan, debtToOthers]);

  return (
    <>
      <SceneHeader title={yourLiabilities.accordionTitle} />
      <MainContentWrapper thoughtCount={1} component="main">
        <ControlledAccordions
          title="Personal/Car loans and Credit card EMIs"
          subtitle={[...yourLiabilities.tabs.personalLoansAndEMI]}
          icon={CashInHand}
          value={personalLoansAndEMI}
          changeValue={(val) =>
            changeAppUserData("liabilities", "personalLoansAndEMI", val)
          }
        />
        <ControlledAccordions
          title="Home Loan"
          subtitle={[...yourLiabilities.tabs.homeLoan]}
          icon={MoneyBagRupeeOrange}
          value={homeLoan}
          changeValue={(val) =>
            changeAppUserData("liabilities", "homeLoan", val)
          }
        />
        <ControlledAccordions
          title="Debt to others"
          subtitle={[...yourLiabilities.tabs.debtToOthers]}
          icon={ManWithMoney}
          value={debtToOthers}
          changeValue={(val) =>
            changeAppUserData("liabilities", "debtToOthers", val)
          }
        />
      </MainContentWrapper>

      <FooterContentWrapper thoughtCount={1} component="footer">
        <ThoughtBox
          text={summary?.replace(
            "{{debtToIncomeRatio}}",
            `(${debtToIncomeRatio}%)`
          )}
        />
      </FooterContentWrapper>
      <SceneFooter />
    </>
  );
};

export default YourLiabilities;
