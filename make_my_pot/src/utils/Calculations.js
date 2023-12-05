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
