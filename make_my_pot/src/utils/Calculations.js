export const calculateTotalIncome = (incomeDetails) => {
  const { baseSalary, annualBonus, otherSourceIncome } = incomeDetails;
  return (
    12 * (Number(baseSalary ?? "") + Number(otherSourceIncome ?? "")) +
    Number(annualBonus ?? "")
  );
};

export const calculateExpenseRatio = (annualExpense, annualIncome) => {
  const expenseRatio = (annualExpense * 100) / annualIncome;
  return expenseRatio;
};

export const calculateAnnualExpense = (expenseDetails) => {
  const { essentialExpenses, lifestyleExpenses, loanEMI } = expenseDetails;
  return (
    12 *
    (Number(essentialExpenses ?? "") +
      Number(lifestyleExpenses ?? "") +
      Number(loanEMI ?? ""))
  );
};

export const calculateAnnualDebt = (debtDetails) => {
  const { personalLoansAndEMI, homeLoan, debtToOthers } = debtDetails;
  return (
    12 *
    (Number(personalLoansAndEMI ?? "") +
      Number(homeLoan ?? "") +
      Number(debtToOthers ?? ""))
  );
};

export const calculateDTIRatio = (annualIncome = 0, annualDebt = 0) => {
  if (annualIncome === 0) return 0;
  return (annualDebt * 100) / annualIncome;
};

export const calculateEssentialExpenseRatio = (
  monthlyEssentialExpense = 0,
  annualIncome = 0
) => {
  if (annualIncome === 0) return 0;
  return (Number(monthlyEssentialExpense) * 12 * 100) / annualIncome;
};

export const calculateSavingsRatio = (annualSavings = 0, annualIncome = 0) => {
  if (annualIncome === 0) return 0;
  return (100 * annualSavings) / annualIncome;
};

export const calculateTotalAsset = (assetObj = {}) => {
  let totalAmount = 0;
  Object.keys(assetObj).forEach(
    (asset) => (totalAmount += Number(assetObj[asset]))
  );
  return totalAmount;
};

export const calculateMonthlyDebt = (liabilities) => {
  let totalDebt = 0;
  console.log("uee", liabilities);
  Object.keys(liabilities).forEach((debtType) => {
    liabilities[debtType].map((debtDesc) => {
      totalDebt += Number(debtDesc.amountPM);
    });
  });
  return totalDebt;
};

export const calculateDebtToNetWorthRatio = (debt, netWorth) => {
  if (netWorth === 0) return 0;
  return (debt * 100) / netWorth;
};

export const calculateEmergencyFunds = (annualExpense) => {
  return (annualExpense / 12) * 3.5;
};

export const calculateTotalLiabilities = (liabilityObj = {}) => {
  let totalAmount = 0;
  Object.keys(liabilityObj).forEach(
    (liability) => (totalAmount += Number(liabilityObj[liability]))
  );
  return totalAmount;
};

export const calculateFinancialAssetRatio = (financialAsset, fixedAsset) => {
  const totalAssets = financialAsset + fixedAsset;
  if (totalAssets === 0) return 0;
  return (financialAsset * 100) / totalAssets;
};

export const calculateEmi = (principal, interestRate, tenureMonths) => {
  const interestRatePerMonth = interestRate / 1200;
  const emi =
    (principal *
      interestRatePerMonth *
      Math.pow(1 + interestRatePerMonth, tenureMonths)) /
    (Math.pow(1 + interestRatePerMonth, tenureMonths) - 1);
  return emi.toFixed(2);
};

const interest = (principal, interestRate) => (interestRate * principal) / 1200;

export const loanCalculator = (emi, principal, interestRate, tenureMonths) => {
  let remainingPrincipal = principal;
  let totalInterestPaid = 0;
  const result = [];

  for (let month = 1; month <= tenureMonths; month++) {
    const interestt = interest(remainingPrincipal, interestRate);
    totalInterestPaid += interestt;

    const principalPaid = emi - interestt;
    remainingPrincipal -= principalPaid;

    // Output results at the end of each year
    if (month % 12 === 0 || month === tenureMonths) {
      const year = Math.ceil(month / 12);
      result.push({
        year,
        newPrincipal: emi - interestt,
        remainingPrincipal:
          remainingPrincipal < 0 ? 0 : remainingPrincipal.toFixed(2),
        totalInterestPaid: totalInterestPaid.toFixed(2),
      });
    }
  }

  return result;
};

export const calculatePrincipalPercentage = (principal, interest) => {
  return ((principal * 100) / (principal + Number(interest))).toFixed(2);
};
