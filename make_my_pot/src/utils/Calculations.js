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

export const calculateDTIRatio = (annualIncome, annualDebt) => {
  return (annualDebt * 100) / annualIncome;
};

export const calculateEssentialExpenseRatio = (
  monthlyEssentialExpense,
  annualIncome
) => {
  return (Number(monthlyEssentialExpense) * 12 * 100) / annualIncome;
};

export const calculateSavingsRatio = (annualSavings, annualIncome) => {
  return (100 * annualSavings) / annualIncome;
};
