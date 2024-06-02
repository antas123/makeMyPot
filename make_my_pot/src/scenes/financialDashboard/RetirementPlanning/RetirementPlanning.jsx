import React, { useState } from "react";
import SceneHeader from "../../../components/scene/SceneHeader";
import MainContentWrapper from "../../../components/wrappers/MainContentWrapper";
import FooterContentWrapper from "../../../components/wrappers/FooterContentWrapper";
import ThoughtBox from "../ThoughtBox";
import moneyBag from "../imagesDashboard/MoneyBag.png";
import calendar from "../imagesDashboard/Calendar.png";
import MiddleSection from "./MiddleSection";
import { FinancialDashboardTitles } from "../../../constants/PlaceholderData";
import { Input } from "@mui/material";

const RetirementPlanning = () => {
  const [expensesPostRetirement, setExpensesPostRetirement] = useState("");
  const [savingsPerMonth, setSavingsPerMonth] = useState("");
  const [currentAge, setCurrentAge] = useState("");
  const [retirementAge, setRetirementAge] = useState("");
  const [corpusRequired, setCorpusRequired] = useState(null);

  const handleExpensesChange = (event) => {
    setExpensesPostRetirement(event.target.value);
    // calculateCorpus(event.target.value, savingsPerMonth, currentAge, retirementAge);
  };

  const handleSavingsChange = (event) => {
    setSavingsPerMonth(event.target.value);
    // calculateCorpus(expensesPostRetirement, event.target.value, currentAge, retirementAge);
  };

  const handleCurrentAgeChange = (event) => {
    setCurrentAge(event.target.value);
    // calculateCorpus(expensesPostRetirement, savingsPerMonth, event.target.value, retirementAge);
  };

  const handleRetirementAgeChange = (event) => {
    setRetirementAge(event.target.value);
    calculateCorpus(expensesPostRetirement, savingsPerMonth, currentAge, event.target.value);
  };

  const calculateCorpus = (expenses, savings, currentAge, retirementAge) => {
    // const annualExpense = Number(expenses) * 12;
    // const yearsToRetirement = Number(retirementAge) - Number(currentAge);
    // const lifeExpectancy = 70;
    // const retirementYears = lifeExpectancy - Number(retirementAge);
    // const inflationRate = 0.06; // 6% inflation rate
    // const adjustedExpense = annualExpense * Math.pow(1 + inflationRate, yearsToRetirement);
    // const totalSavingsUntilRetirement = Number(savings) * 12 * yearsToRetirement;
    // const corpusRequired = adjustedExpense * retirementYears - totalSavingsUntilRetirement;
    let corpus = (70 - retirementAge)*expenses*12
    setCorpusRequired(corpus);
  };

  return (
    <>
      <SceneHeader title={FinancialDashboardTitles.retirementPlanning} />

      <MainContentWrapper thoughtCount={1} component="main" special>
        <div style={{display:'flex', flexDirection:'column', gap:'10px'}} >
         
          <Input
            type="text"
            name=""
            placeholder="Expenses/ month"
            sx={{
              border: "1px solid grey",
              padding: "0 20px",
              borderBottom: "0",
              width: "50%",
              textAlign: "center",
              alignContent: "center",
            }}
            value={expensesPostRetirement}
            onChange={handleExpensesChange}
            id=""
          />
           <Input
            type="text"
            name=""
            placeholder="Savings/ month"
            sx={{
              border: "1px solid grey",
              padding: "0 20px",
              borderBottom: "0",
              width: "50%",
              textAlign: "center",
              alignContent: "center",
            }}
            value={savingsPerMonth}
            onChange={handleSavingsChange}
            id=""
          />
           <Input
            type="text"
            name=""
            placeholder="Your current age"
            sx={{
              border: "1px solid grey",
              padding: "0 20px",
              borderBottom: "0",
              width: "50%",
              textAlign: "center",
              alignContent: "center",
            }}
            value={currentAge}
            onChange={handleCurrentAgeChange}
            id=""
          />
           <Input
            type="text"
            name=""
            placeholder="Retirement age"
            sx={{
              border: "1px solid grey",
              padding: "0 20px",
              borderBottom: "0",
              width: "50%",
              textAlign: "center",
              alignContent: "center",
            }}
            value={retirementAge}
            onChange={handleRetirementAgeChange}
            id=""
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
              money={corpusRequired}
            />
            <MiddleSection img={calendar} heading={"Freedom in"} years={corpusRequired/(savingsPerMonth*12)} />
          </div>
        </div>
        <div>
          Note: for India we consider life Expectancy as <b> 70 years </b> and annual inflation rate of 6%
        </div>
      </MainContentWrapper>

      <FooterContentWrapper component="footer" thoughtCount={1}>
        <ThoughtBox />
      </FooterContentWrapper>
    </>
  );
};

export default RetirementPlanning;
