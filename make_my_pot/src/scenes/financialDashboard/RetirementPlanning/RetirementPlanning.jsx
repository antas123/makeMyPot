import React, { useState } from "react";
import SceneHeader from "../../../components/scene/SceneHeader";
import MainContentWrapper from "../../../components/wrappers/MainContentWrapper";
import FooterContentWrapper from "../../../components/wrappers/FooterContentWrapper";
import ThoughtBox from "../ThoughtBox";
import moneyBag from "../imagesDashboard/MoneyBag.png";
import calendar from "../imagesDashboard/Calendar.png";
import finGrow from "../imagesDashboard/FinancialGrowth.png";
import MiddleSection from "./MiddleSection";
import StackedAreas from "./StackedAreas";
import Barchart from "../ManageYourLoans/Barchart";
import { FinancialDashboardTitles } from "../../../constants/PlaceholderData";
import ControlledAccordions from "../../../components/Accordion";
import {
  calculateAnnualExpense,
  calculateExpenseAtBeginningOfRetirement,
} from "../../../utils/Calculations";

const RetirementPlanning = ({
  changeAppUserData,
  retirementPlanningDetails,
}) => {
  const { expensesPostRetirement } = retirementPlanningDetails;
  const annualExpense = Number(expensesPostRetirement || "") * 12;
  const expenseOnRetirement =
    calculateExpenseAtBeginningOfRetirement(1000, 7, 3) + 1000 * 3;

  return (
    <>
      <SceneHeader title={FinancialDashboardTitles.retirementPlanning} />

      <MainContentWrapper thoughtCount={1} component="main" special>
        <div>
          <ControlledAccordions
            title="Expenses/ month"
            subtitle={[
              "(Optional) expense name for your reference",
              "Enter the amount...",
            ]}
            icon={moneyBag}
            value={retirementPlanningDetails?.expensesPostRetirement}
            changeValue={(val) =>
              changeAppUserData(
                "retirementPlanning",
                "expensesPostRetirement",
                val
              )
            }
            special
            tab="retirementPlanning"
            name="expensesPostRetirement"
          />
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", padding: "10px" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
            }}
          >
            <h3>Financial Freedom</h3>
            <div
              style={{
                backgroundColor: "#94A684",
                padding: "5px",
                height: "20px",
                marginTop: "15px",
              }}
            >
              Achievable
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "30px",
            }}
          >
            <MiddleSection
              img={moneyBag}
              heading={"Corpus Required"}
              money={expenseOnRetirement}
            />
            <MiddleSection
              img={finGrow}
              heading={"Monthly SIP"}
              money={"12,343"}
            />
            <MiddleSection img={calendar} heading={"Freedom in"} years={"12"} />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginBottom: "30px",
            width: "100%",
            flexDirection: "column",
            margin: "auto",
          }}
        >
          <p style={{ fontSize: "18px", color: "grey" }}>
            How retirement corpus is used post retirement?
          </p>
          <StackedAreas />
        </div>

        <div
          style={{
            padding: "10px",
            display: "flex",
            width: "100%",
            margin: "auto",
            flexDirection: "column",
          }}
        >
          <p style={{ fontSize: "18px", color: "grey", marginBottom: "30px" }}>
            How retirement corpus is used post retirement?
          </p>
          <Barchart isTrimmed />
        </div>
      </MainContentWrapper>

      <FooterContentWrapper component="footer" thoughtCount={1}>
        <ThoughtBox />
      </FooterContentWrapper>
    </>
  );
};

export default RetirementPlanning;
