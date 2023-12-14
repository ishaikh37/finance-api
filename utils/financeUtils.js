const calculateLoanDetails = (price, deposit, term, annualInterestRate) => {
  // Validate input values
  if (price <= 0 || deposit < 0 || term <= 0 || annualInterestRate <= 0) {
    throw new Error("Invalid input values");
  }

  // Calculate loan details
  const loanValue = price - deposit;
  const monthlyInterestRate = annualInterestRate / 1200; // Monthly interest rate in decimal
  const monthlyPayment =
    (loanValue * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -term));
  const totalInterestPayable = monthlyPayment * term - loanValue;

  // Return calculated values in an object
  return {
    Price: price,
    Deposit: deposit,
    LoanValue: loanValue,
    MonthlyInterestRate: monthlyInterestRate,
    MonthlyPayment: monthlyPayment.toFixed(2), // Round to 2 decimal places
    APR: annualInterestRate,
    TotalInterestPayable: totalInterestPayable.toFixed(2),
    Term: term,
    DeferredTerm: 0,
    TotalTerm: term,
    CustomerAdminFee: 0,
    AnnualInterestRate: annualInterestRate,
  };
};

module.exports = {
  calculateLoanDetails,
};
